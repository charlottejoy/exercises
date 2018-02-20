//media query
//media query
$(".hamburger").click(function() {
  $(".menu").toggleClass("menu--open");
});

$(".menu-link").click(function() {
  $(".menu").removeClass("menu--open");
  $(".navigation").removeClass("navigation--open");
});

$(".hamburger--short").click(function() {
  $(".navigation").toggleClass("navigation--open");
});