var countDownDate = new Date("Aug 30, 2021 12:30:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo-day").innerHTML = days;
  document.getElementById("demo-hour").innerHTML = hours;
  document.getElementById("demo-min").innerHTML = minutes;
  document.getElementById("demo-sec").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$("#btn").on("click", function () {
  alert("Успешно");
});

$(function () {
  $("#biography").click(function () {
    var bioItog = $("#biography-itog");

    if (bioItog.css("display") === "none") {
      bioItog.css("display", "block");
    } else {
      bioItog.css("display", "none");
    }
  });
});

$(function () {
  $("#biography-2").click(function () {
    var bioItog = $("#biography-itog");

    if (bioItog.css("display") === "none") {
      bioItog.css("display", "block");
    } else {
      var anim = bioItog.css("display", "none");
    }
  });
});

$(function () {
  $("#biography-3").click(function () {
    var bioItog = $("#biography-itog");

    if (bioItog.css("display") === "none") {
      bioItog.css("display", "block");
    } else {
      bioItog.css("display", "none");
    }
  });
});

// $('#curse').click(function() {
//   $.scrollTo($('#advantages'), 1000);
// });

// $('#curse').click(function() {
//   $('#advantages').animate({
//       scrollTop: eval($('#' + $(this)).offset().top - 70)
//   }, 1000);
// });

$("#curse").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $("html, body").animate({ scrollTop: destination }, 600);
  return false;
});
$("#time").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $("html, body").animate({ scrollTop: destination }, 600);
  return false;
});
$("#teach").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $("html, body").animate({ scrollTop: destination }, 600);
  return false;
});
$("#rass").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $("html, body").animate({ scrollTop: destination }, 600);
  return false;
});
$("#about").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $("html, body").animate({ scrollTop: destination }, 600);
  return false;
});
