$(document).ready(function () {
  $(".bi-moon-stars-fill").on("click", (event) => {
    event.preventDefault();

    $("body").toggleClass("dark-mode");
  });

  // $(".hov").hover(function () {
  //   $(".cont4").toggleClass("appear");
  // });

  // $("body").click(function () {
  //   $(".cont4").addClass("appear");
  // });

  $("#hide2 i").click(function () {
    $(".cont3").toggleClass("hide");
  });

  $(".membershipActivate").on("click", function () {
    $(".model").removeClass("imp");
  });

  $(".exit").on("click", function () {
    $(".model").addClass("imp");
  });

  $(".music").on("click", function () {
    let audio = new Audio("./assets/asap.mp3");
    audio.play();
    $(".music2").removeClass("hd");
    $(".music").addClass("hd");

    $(".music2").on("click", function () {
      $(".music2").addClass("hd");
      $(".music").removeClass("hd");
      audio.pause();
    });
  });
});
