$(".login_form").submit(function (e) {
  e.preventDefault();
  $.post(location.href, $(this).serialize(), function (r) {
    console.log(r);
  });
});
