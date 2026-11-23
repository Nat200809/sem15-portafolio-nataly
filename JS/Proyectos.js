$(".Proyectos img").click(function (e) {
  var img = $(e.target).attr("src");
  var modelo = '<div class="modelo"><img src="' + img + '" alt="Imagen ampliada"><span class="cerrar">&times;</span></div>';
  $("body").append(modelo);
});

$("body").on("click", ".cerrar", function () {
  $(".modelo").remove();
});

$("body").on("click", ".modelo", function (e) {
  if ($(e.target).hasClass("modelo")) $(".modelo").remove();
});

$(window).keyup(function (e) {
  if (e.which == 27) {
    $(".modelo").remove();
  }
});