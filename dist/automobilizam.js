function uvecaj() {
  $("#naslovna").ready(function() {
    $("#animacija").animate(
      {
        width: "100%",
        color: "white",
        fontSize: "35px",
        opacity: "0.95"
      },
      1000
    );
  });
}

$(".navbar").ready(function() {
  $("#slika").fadeIn(3000);
});

$("#sakriven").slideDown(3000);
$("#sakriven1").slideDown(3000);
$("#sakriven2").slideDown(3000);
$("#strelica").animate({ height: "190px", opacity: "1" }, 3000);
$("#strelica1").animate({ height: "190px", opacity: "1" }, 3000);
$("#tekst").slideDown(3000);

$("#pol1").click(function() {
  $(".slika1").fadeToggle(2000);
});
$("#pol2").click(function() {
  $(".slika2").fadeToggle(2000);
});
$("#pol3").click(function() {
  $(".slika3").fadeToggle(2000);
});
$("#pol4").click(function() {
  $(".slika4").fadeToggle(2000);
});
$("#pol5").click(function() {
  $(".slika5").fadeToggle(2000);
});
$("#pol6").click(function() {
  $(".slika6").fadeToggle(2000);
});
$("#pol7").click(function() {
  $(".slika7").fadeToggle(2000);
});
$("#pol8").click(function() {
  $(".slika8").fadeToggle(2000);
});
$("#pol9").click(function() {
  $(".slika9").fadeToggle(2000);
});
$("#pol10").click(function() {
  $(".slika10").fadeToggle(2000);
});
$("#pol11").click(function() {
  $(".slika11").fadeToggle(2000);
});
$("#pol12").click(function() {
  $(".slika12").fadeToggle(2000);
});
$("#pol13").click(function() {
  $(".slika13").fadeToggle(2000);
});
$("#pol14").click(function() {
  $(".slika14").fadeToggle(2000);
});
$("#pol15").click(function() {
  $(".slika15").fadeToggle(2000);
});
$("#pol16").click(function() {
  $(".slika16").fadeToggle(2000);
});
$("#pol17").click(function() {
  $(".slika17").fadeToggle(2000);
});
$("#pol18").click(function() {
  $(".slika18").fadeToggle(2000);
});
$("#pol19").click(function() {
  $(".slika19").fadeToggle(2000);
});
$("#pol20").click(function() {
  $(".slika20").fadeToggle(2000);
});
$("#pol21").click(function() {
  $(".slika21").fadeToggle(2000);
});
$("#pol22").click(function() {
  $(".slika22").fadeToggle(2000);
});
$("#pol23").click(function() {
  $(".slika23").fadeToggle(2000);
});
$("#pol24").click(function() {
  $(".slika24").fadeToggle(2000);
});
$("#pol25").click(function() {
  $(".slika25").fadeToggle(2000);
});

$("#prikazi").fadeToggle(3000);

$("#unos").on("keyup", function() {
  var value = $(this)
    .val()
    .toLowerCase();
  $("#lista li").filter(function() {
    $(this).toggle(
      $(this)
        .text()
        .toLowerCase()
        .indexOf(value) > -1
    );
  });
  $("#car a").filter(function() {
    $(this).toggle(
      $(this)
        .text()
        .toLowerCase()
        .indexOf(value) > -1
    );
  });
  $("#strelica").filter(function() {
    $(this).toggle(
      $(this)
        .text()
        .toLowerCase()
        .indexOf(value) > -1
    );
  });
  $("#strelica1").filter(function() {
    $(this).toggle(
      $(this)
        .text()
        .toLowerCase()
        .indexOf(value) > -1
    );
  });
});
