$(document).ready(function() {
  var modalRedirect = Cookies.get("modalRedirect");
  console.log("modalRedirect", modalRedirect);

  if (modalRedirect != "closed") {
    $(".cs-it-RedirectModal").css("display", "block");
  }

  $(".cs-it-RedirectModal-moreLink").on("click", function(e) {
    e.preventDefault();
    var info = $(this).data("info");
    $(".cs-it-RedirectModal-content--" + info).css("display", "block");
  });

  $(".cs-it-RedirectCloseButton--content").on("click", function(e) {
    e.preventDefault();
    var close = $(this).data("close");
    $(".cs-it-RedirectModal-content--" + close).css("display", "none");
  });

  $(".modal__redirect-close").on("click", function(e) {
    e.preventDefault();
    $(".cs-it-RedirectModal").css("display", "none");
    Cookies.set("modalRedirect", "closed");
  });
});