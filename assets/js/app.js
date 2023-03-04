$("window").ready(() => {
  getRating("#one");
  getRating("#two");
  getRating("#three");
  getRating("#four");
  getRating("#five");
});

const getRating = (id) => {
  $(`${id}`).click(() => {
    const rates = $(`${id}`).html();
    $("#display-rates").html(rates);
  });
};
$("#submitBtn").click(() => {
  if ($("#display-rates").html() > 0) {
    $("#firstCard").toggle(() => {
      $("#firstCard").css("display", "none");
    });
    $("#secondCard").toggle(() => {
      $("#secondCard").css("display", "block");
    });
  } else {
    alert("First choose rating number!!");
  }
});
