$(".login_form").submit(function (e) {
  e.preventDefault();
  $.post(location.href, $(this).serialize(), function (r) {
    if (r.err) console.log(r.err);
    else {
      location.href = "/";
    }
  });
});
