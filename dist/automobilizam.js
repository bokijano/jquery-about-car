function uvecaj() {
	$("#naslovna").ready(function() {
	$("#animacija").animate({
        width: '100%',
        color: 'white',
        fontSize: '35px',
        opacity: '0.95'
	}, 1000);
});
}    
	
	$(".navbar").ready(function() {
	$("#slika").fadeIn(3000);
});

    $("#sakriven").slideDown(3000);
    $("#sakriven1").slideDown(3000);
    $("#sakriven2").slideDown(3000);
    $("#strelica").animate({height: '190px',
                            opacity: '1'}, 3000);
    $("#strelica1").animate({height: '190px',
                            opacity: '1'}, 3000);    
    $("#tekst").slideDown(3000);

     $("#slajd1").click(function(){
     $("#oldtajmer").fadeToggle(3000);
});
     $("#slajd2").click(function(){
     $("#trkacki").fadeToggle(3000);
});
     $("#slajd3").click(function(){
     $("#luksuzni").fadeToggle(3000);
});     

$("#pol1").click(function() {
$(".slika1").slideToggle(2000);
  });
$("#pol2").click(function() {
$(".slika2").slideToggle(2000);
  });
$("#pol3").click(function() {
$(".slika3").slideToggle(2000);
  });
$("#pol4").click(function() {
$(".slika4").slideToggle(2000);
  });
$("#pol5").click(function() {
$(".slika5").slideToggle(2000);
  });
$("#pol6").click(function() {
$(".slika6").slideToggle(2000);
  });
$("#pol7").click(function() {
$(".slika7").slideToggle(2000);
  });
$("#pol8").click(function() {
$(".slika8").slideToggle(2000);
  });
$("#pol9").click(function() {
$(".slika9").slideToggle(2000);
  });
$("#pol10").click(function() {
$(".slika10").slideToggle(2000);
  });
$("#pol11").click(function() {
$(".slika11").slideToggle(2000);
  });
$("#pol12").click(function() {
$(".slika12").slideToggle(2000);
  });
$("#pol13").click(function() {
$(".slika13").slideToggle(2000);
  });
$("#pol14").click(function() {
$(".slika14").slideToggle(2000);
  });
$("#pol15").click(function() {
$(".slika15").slideToggle(2000);
  });
$("#pol16").click(function() {
$(".slika16").slideToggle(2000);
  });
$("#pol17").click(function() {
$(".slika17").slideToggle(2000);
  });
$("#pol18").click(function() {
$(".slika18").slideToggle(2000);
  });
$("#pol19").click(function() {
$(".slika19").slideToggle(2000);
  });
$("#pol20").click(function() {
$(".slika20").slideToggle(2000);
  });
$("#pol21").click(function() {
$(".slika21").slideToggle(2000);
  });
$("#pol22").click(function() {
$(".slika22").slideToggle(2000);
  });
$("#pol23").click(function() {
$(".slika23").slideToggle(2000);
  });
$("#pol24").click(function() {
$(".slika24").slideToggle(2000);
  });
$("#pol25").click(function() {
$(".slika25").slideToggle(2000);
  });

$("#prikazi").slideDown(3000);

$("#unos").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#lista li").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1) 
    });
    $("#car a").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1) 
    });
    $("#strelica").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1) 
    });
    $("#strelica1").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1) 
    });
  });

document.getElementById("slajd1").title = "Jedan klik - otvori stranu, sledeći - zatvori";
document.getElementById("slajd2").title = "Jedan klik - otvori stranu, sledeći - zatvori";
document.getElementById("slajd3").title = "Jedan klik - otvori stranu, sledeći - zatvori";