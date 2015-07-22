$(".login_form").submit(function (e) {
  e.preventDefault();
  $(".progress").show();
  $.post(location.href, $(this).serialize(), function (r) {
    if (r.err.username) {
      $(".progress").hide();
      $("[name=username]").addClass('invalid');
    } else if (r.err.password) {
      $(".progress").hide();
      $("[name=password]").addClass('invalid');
    } else if(!r.err) {
      location.href = r.params.goto;
    } else {
      $(".progress").hide();
      console.log(r.err);
    }
  });
});
