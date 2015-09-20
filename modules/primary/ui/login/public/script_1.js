$("master-layout").removeAttr("wide");
$("[name=username]").focus();

$(".login_form").submit(function (e) {
  e.preventDefault();
  console.log(e);
  $(".login_form [ng-messages]").hide();
  $(".login_form .username").removeClass("md-input-invalid");
  $(".login_form .password").removeClass("md-input-invalid");

  iosync.login({
    username: $("[name=username]", $(this)).val(),
    password:$("[name=password]", $(this)).val()
  }, function (rslt) {
    if(!rslt.error){
      $("master-layout").attr({
        "wide": true,
        "url": rslt.redirect
      });
    } else if (rslt.error=="username_not_exist") {
      $(".login_form .username").addClass("md-input-invalid");
      $(".login_form .username [ng-messages]").show();
    } else if (rslt.error=="invalid_password") {
      $(".login_form .password").addClass("md-input-invalid");
      $(".login_form .password [ng-messages]").show();
    } else console.log(rslt);
  })
})
