$(document).ready(function () {
  $("#questions").submit(function (event) {
    $("#javascript").hide();
    $("#csharp").hide();
    $("#ruby").hide();
    $("#no").hide();
    const creative = parseInt($("input:radio[name=creative]:checked").val());
    const design = parseInt($("input:radio[name=design]:checked").val());
    const variables = parseInt($("input:radio[name=variables]:checked").val());
    const solve = parseInt($("input:radio[name=solve]:checked").val());
    const pair = parseInt($("input:radio[name=pair]:checked").val());
    event.preventDefault();

  if (creative + design + variables + solve + pair === 5) {
  $("#javascript").show();
  } else if (creative + design + variables + solve + pair === 4) {
  $("#csharp").show();
  } else if (creative + design + variables + solve + pair === 3) {
  $("#csharp").show();
  } else if (creative + design + variables + solve + pair === 2) {
  $("#ruby").show();
  } else if (creative + design + variables + solve + pair === 1) {
  $("#ruby").show();
  } else if (creative + design + variables + solve + pair === 0) {
  $("#no").show();
  }
  });
});

