let tipPercentage = 0;
let numberOfPeople = 0;
let totalBill = 0;

let netBill = document.getElementById("netbill");
netBill.addEventListener("keyup", () => {
  totalBill = Number(netBill.value);
  print();
  return;
});

function percentageValue(val) {
  tipPercentage = Number(val);
  print();
  return;
}

let customTip = document.getElementById("custom-tip");
customTip.addEventListener("keyup", (e) => {
  e.preventDefault();
  tipPercentage = Number(customTip.value) / 100;
  print();
  return;
});

let people = document.getElementById("people");
people.addEventListener("input", () => {
  numberOfPeople = Number(people.value);

  if (numberOfPeople > 0 || people.value == "") {
    document.getElementById("people-err").classList.remove("show");
    document.getElementById("people-err").classList.add("hide");
    print();
    return;
  } else {
    document.getElementById("people-err").classList.remove("hide");
    document.getElementById("people-err").classList.add("show");
  }
  return;
});

let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click", () => {
  numberOfPeople = 0;
  tipPercentage = 0;
  totalBill = 0;
  document.getElementById("tip-per-person").textContent = "$0.00";
  document.getElementById("total-per-person").textContent = "$0.00";
  return;
});

function print() {
  if (numberOfPeople == 0 || tipPercentage == 0 || totalBill == 0) {
    document.getElementById("tip-per-person").textContent = "$0.00";
    document.getElementById("total-per-person").textContent = "$0.00";
    return;
  }

  let billPerHead = (
    (totalBill + totalBill * tipPercentage) /
    numberOfPeople
  ).toFixed(2);
  let tipPerHead = ((totalBill * tipPercentage) / numberOfPeople).toFixed(2);

  document.getElementById("tip-per-person").textContent = "$" + tipPerHead;
  document.getElementById("total-per-person").textContent = "$" + billPerHead;
}
