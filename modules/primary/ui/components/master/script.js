
var me; // polymer element
var shared_scope;
var shared_compile;

Polymer({
  is: "master-layout",
  properties: {
    wide: {
      type: Boolean,
      notify: true,
      observer: '_wideChanged'
    },
    dir: {
      type: String,
      notify: true,
      observer: '_dirChanged'
    },
    url: {
      type: String,
      notify: true,
      observer: '_urlChanged'
    }
  },
  _wideChanged: function (val) {
    if(shared_scope){ // scope is ready
      shared_scope.wide_layout = !!val;
      if(!shared_scope.wide_layout) shared_scope.lock_sidenav = true;
      shared_scope.$apply(); // update ui
    }
  },
  _dirChanged: function (val) {
    var rtl = (val.toLowerCase()=="rtl");
    if(rtl){
      $("md-menu[origin=normal]").attr("md-position-mode", "target-right target");
      $("md-menu[origin=reversed]").attr("md-position-mode", "target target");
    }else{
      $("md-menu[origin=normal]").attr("md-position-mode", "target target");
      $("md-menu[origin=reversed]").attr("md-position-mode", "target-right target");
    }
    if(shared_scope){ // scope is ready
      shared_scope.rtl = rtl;
      shared_scope.$apply(); // update ui
    }
  },
  _urlChanged: function (val) {
    iosync.query(val, {}, function (rslt) {
      shared_compile($(".page", $(me)).html(rslt.content))(shared_scope);
      history.pushState({href: val}, rslt.title || document.title, val);
    });
  },

  created: function () {

    me = this; // set polymer element
    initAngular(); // start angular initialisation

    $(window).bind("popstate", function(e) {
      iosync.query((e.originalEvent.state?e.originalEvent.state.href:location.href), {}, function (rslt) {
        shared_compile($(".page", $(me)).html(rslt.content))(shared_scope);
      });
    });

  },
  attached: function () {
    me.force_update_ui=function () {
      if(shared_scope) shared_scope.$apply();
    };
  }
});

var scope_ready = function () {
  // bind side_menu to external api, we used this method to keep passing var by reference
  shared_scope.side_menu = me.side_menu;

  shared_scope.wide_layout = me.wide;
  shared_scope.rtl = ((me.dir?(me.dir.toLowerCase()=="rtl"):false));

  //shared_scope.$apply();
};

var initAngular = function () {
  var module = angular.module('master-layout-app', ['ngMaterial']);
  var directive = module.directive('toggleparentclass', function () { // for side menu element's click
    var link = function (scope, element, attrs) {
      element.bind('click', function () {
        var ul = angular.element(element.parent('li').find('ul')[0]);
        if(element.parent().hasClass(attrs.toggleparentclass)){
          ul.css('height', ul.prop('scrollHeight') + 'px');
          setTimeout(function () {
            element.parent().removeClass(attrs.toggleparentclass);
            ul.css('height', '0px');
          },100);
        }else{
          ul.css('height', ul.prop('scrollHeight') + 'px');
          element.parent().addClass(attrs.toggleparentclass);
          setTimeout(function () {
            ul.css('height', 'auto');
          }, 200);
        }
      });
    };
    return {
      restrict: 'A',
      link: link
    };
  });

  // handling sidenav open & close
  var controller = module.controller('master-layout-ctrl', function ($scope, $mdSidenav, $mdMedia, $compile) {
    $scope.lock_sidenav = $mdMedia('gt-md');
    $scope.toggle_sidenav = function () {
      if(!$mdMedia('gt-md')) {
        $scope.lock_sidenav = false;
        $mdSidenav('sidenav').open();
      } else $scope.lock_sidenav = !$scope.lock_sidenav;
    };
    $scope.$watch(function() { return $mdMedia('gt-md'); }, function(med) {
      $scope.lock_sidenav = med;
    });

    // handling search functionnality
    $scope.toggle_search = false;
    $scope.search = function () {
      if($scope.toggle_search){
        var q = $(".page-top .search-input input").val();
        iosync.query("/search", {query: q}, function (rslt) {

          // show results

        })
      }else{
        $scope.toggle_search = true;
        $(".page-top .search-input input").focus();
      }
    };
    $scope.search_back = function () {
      $scope.toggle_search = false;
    };

    // search speech recognition functionnality
    $scope.speech_enabled = ('webkitSpeechRecognition' in window);
    if($scope.speech_enabled){
      $scope.speech = false;
      var recognition = new webkitSpeechRecognition();
      recognition.lang="fr-FR";
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = function (e) {
        var rslt = e.results[e.results.length-1][0].transcript;
        $(".search-input input").val(rslt).focus();
        if(e.results[e.results.length-1].isFinal) $scope.search();
      };
      $scope.$watch(function() { return ($scope.speech && $scope.toggle_search); }, function(sp) {
        if (sp) recognition.start();
        else recognition.stop();
      });
      $scope.toggle_speech = function () {
        $scope.speech = !$scope.speech;
      }
    }

    $scope.logout = function () {
      iosync.logout(function (rslt) {
        if(!rslt.error){
          $(me).removeAttr('wide');
          $(me).attr('url', rslt.redirect);
        }else console.log(rslt);
      });
    }

    shared_scope = $scope;
    shared_compile = $compile;
    scope_ready();
    shared_scope.done = true;
  });
};
