iosync.bind("/test", function (value, patches) {
  if(patches[0].source=="server") $("#input").val(value).trigger('change').focus();
});

$("#input").keyup(function() {
  iosync.patch("/test", $("#input").val());
});
