$(document).ready(function () {
  $(".toolbar #btnGenerate").click(function (e) {
    $("#myModal").modal('show');
  });

  $(".toolbar #btnExport").click(function (e) {

  });

  $("#myModal .btn-primary").click(function (e) {
    $(".mainContent").empty();
    // generate all maths

    $("#myModal").modal('hide');
  });
});