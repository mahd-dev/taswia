$(".login_form").submit(function (e) {
  e.preventDefault();
  $(".login_btn>.preloader-wrapper").addClass("active").removeClass('hide');
  $.post(location.href, $(this).serialize(), function (r) {
    if (r.err.username) {
      $(".login_btn>.preloader-wrapper").addClass("hide").removeClass('active');
      $("[name=username]").addClass('invalid');
    } else if (r.err.password) {
      $(".login_btn>.preloader-wrapper").addClass("hide").removeClass('active');
      $("[name=password]").addClass('invalid');
    } else if(!r.err) {
      location.href = r.params.goto;
    } else {
      $(".login_btn>.preloader-wrapper").addClass("hide").removeClass('active');
      console.log(r.err);
    }
  });
});

$("[name=username]").focus();
