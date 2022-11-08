function ajustarfooter() {
  var winH = $(window).height();
  var contenidoH = $("header").height();

  if (contenidoH < winH) {
    $("nav").attr("class", "bg-light");
  }
}

$(document).ready(ajustarfooter);
$(window).on("resize", ajustarfooter);


  