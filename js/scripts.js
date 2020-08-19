$(document).ready(function () {
  $("#fortuneForm").submit(function (event) {
    let checkBoxForm = document.forms[0];
    let pattern1 = "";
    let unluckypat1 = ["saltmirrorumbrellacrows"];
    let unluckypat2 = ["saltmirrorcrowsclover"]
    let unluckypat3 = ["saltcrowscloverhorse" ]
    let unluckypat4 = ["saltcrowshorseladybug"]
    let luckypat1 = ["cloverhorseladybugbarn"]
    let luckypat2 = ["salthorseladybugbarn"]
    let luckypat3 = ["saltcrowshorseladybug"]
    let luckypat4 = ["mirrorcrowscloverladybug"]


    for (i = 0; i < checkBoxForm.length; i++) {
      if (checkBoxForm[i].checked) {
        pattern1 += (checkBoxForm[i].value + "").toString();
      }
      // console.log(pattern1);
    }
    console.log(pattern1);
    // console.log(unluckypat1)

    if (pattern1 = unluckypat1) {
      $("#fortune").text("The Grim Reaper is Near.");
    } else if (pattern1 == unluckypat2) {
      $("#fortune").text("The Grim Reaper is Near.");
    } else if (pattern1 == unluckypat3) {
      $("#fortune").text("The Grim Reaper is Near.");
    } else if (pattern1 == unluckypat4) {
      $("#fortune").text("The Grim Reaper is Near.");
    } else if (pattern1 == luckypat1) {
      $("#fortune").text("Buy Lotto Ticket. Something Lucky is Coming Your Way.");
    } else if (pattern1 == luckypat2) {
      $("#fortune").text("Buy Lotto Ticket. Something Lucky is Coming Your Way.");
    } else if (pattern1 == luckypat3) {
      $("#fortune").text("Buy Lotto Ticket. Something Lucky is Coming Your Way.");
    } else if (pattern1 == luckypat4) {
      $("#fortune").text("Buy Lotto Ticket. Something Lucky is Coming Your Way.");
    } else {
      $("#fortune").text("Your fortune is uncertain. Try Again.");
    }

    $("#fortune").show();
   


    // $("#fortune").text();
    // $("#story").show();

    event.preventDefault();
  });
});