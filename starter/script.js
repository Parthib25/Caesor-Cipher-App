const eninp = document.querySelector(".en-inp");
const enkey = document.querySelector(".en-key");
const enstep = document.querySelector(".en-step");
const ensubmit = document.querySelector(".en-submit");
const enresult = document.querySelector(".en-result");
const deinp = document.querySelector(".de-inp");
const dekey = document.querySelector(".de-key");
const destep = document.querySelector(".de-step");
const desubmit = document.querySelector(".de-submit");
const deresult = document.querySelector(".de-result");
const git = document.querySelector(".git");
const copyen = document.getElementById("1");
const copyde = document.getElementById("2");

ensubmit.onclick = function enresultfun() {
  var enstr = eninp.value;
  let result = [];
  let enk = Number(enkey.value);
  var ens = Number(enstep.value);
  var cal = (enk * (ens * (ens + 1))) / 2;
  for (let j = 0; j < enstr.length; j++) {
    result[j] = String.fromCharCode(enstr.charCodeAt(j) + cal);

    copyen.onclick = function copy() {
      navigator.clipboard.writeText(result.join(""));
      alert("Text copied:)");
    };
  }
  enresult.innerHTML = `Result:${result.join("")}`;
};
desubmit.onclick = function deresultfun() {
  var destr = deinp.value;
  let result = [];
  let dek = Number(dekey.value);
  var des = Number(destep.value);
  var cal = (dek * (des * (des + 1))) / 2;
  for (let j = 0; j < destr.length; j++) {
    result[j] = String.fromCharCode(destr.charCodeAt(j) - cal);

    copyde.onclick = function copy() {
      navigator.clipboard.writeText(result.join(""));
      alert("Text copied:)");
    };
  }
  deresult.innerHTML = `Result:${result.join("")}`;
};
git.onclick = function () {
  window.open("https://github.com/Parthib25");
};
