$(document).ready(function () {
  $("#questions").submit(function (event) {
    $("#javascript").hide();
    $("#c#").hide();
    $("#ruby").hide();
    const creative = parseInt($("input:radio[name=creative]:checked").val());
    const hard = parseInt($("input:radio[name=hard]:checked").val());
    const early = parseInt($("input:radio[name=early]:checked").val());
    const late = parseInt($("input:radio[name=late]:checked").val());
    const complex = parseInt($("input:radio[name=complex]:checked").val());
    event.preventDefault();

  if (creative + hard + early + late + complex === 5) {
  $("#javascript").show();
  } else if (creative + hard + early + late + complex === 4) {
  $("#c#").show();
  } else if (creative + hard + early + late + complex === 3) {
  $("#c").show();
  } else if (creative + hard + early + late + complex === 2) {
  $("#ruby").show();
  } else if ((creative + hard + early + late + complex === 1) {
  $("#ruby").show();
  }
  });
});
