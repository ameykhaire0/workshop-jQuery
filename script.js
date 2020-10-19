$(document).ready(() => {
  const color = ["red", "yellow", "orange"];
  $(".btn").each(function (i) {
    $(this).click(function () {
      $(".ball").each(function () {
        if (!$(this).hasClass(color[i])) {
          $(this).hide();
        }
      });
      $(".green").removeClass("green");
      $(this).addClass("green");
    });
  });

  $("#btn4").click(function () {
    $(".ball").each(function () {
      $(this).show();
    });
    $(".green").removeClass("green");
    $(this).addClass("green");
  });
});

//--------Selecting each button and then adding event listner------------
// $("#btn1").click(() => {
//   $(".ball").each(function () {
//     if (!$(this).hasClass("red")) {
//       $(this).hide();
//     }
//   });
//   $(".btn").addClass(function () {
//     if (this.id === "btn1") {
//       return "green";
//     }
//     this.classList.remove("green");
//   });
// });
// $("#btn2").click(() => {
//   $(".ball").each(function () {
//     if (!$(this).hasClass("yellow")) {
//       $(this).hide();
//     }
//   });
//   $(".btn").addClass(function () {
//     if (this.id === "btn2") {
//       return "green";
//     }
//     this.classList.remove("green");
//   });
// });
// $("#btn3").click(() => {
//   $(".ball").each(function () {
//     if (!$(this).hasClass("orange")) {
//       $(this).hide();
//     }
//   });
//   $(".btn").addClass(function () {
//     if (this.id === "btn3") {
//       return "green";
//     }
//     this.classList.remove("green");
//   });
// });
