console.log("aa");

iosync.bind("/test", function (val, patches) {
  $("#input").val(val).trigger('change').focus();
});

$("#input").keyup(function() {
  iosync.patch("/test", $("#input").val());
});
