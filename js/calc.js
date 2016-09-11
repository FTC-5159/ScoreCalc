var beaconArray = new Array(3);

setup();

function setup() {
  for (var i = 0; i < 3; i++) {
    var lbl = document.createElement("label");
    lbl.setAttribute('class', 'radio-inline');
    beaconArray[i] = document.createElement("input");
    beaconArray[i].type = "radio";
    beaconArray[i].id = "auto-beacon-" + i;
    lbl.appendChild(beaconArray[i]);
    lbl.innerHTML = lbl.innerHTML + " " + i + " ";
    document.getElementById("beacon-form").appendChild(lbl);

  }
}

document.addEventListener('click', function() {
  if (event.target.id.indexOf('auto-beacon') !== -1) {
    for (var i = 0; i < 3; i++) {
      document.getElementById("auto-beacon-" + i).checked = false;
    }
    event.target.checked = true;
  }
})
