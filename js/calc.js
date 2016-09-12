/*
  IDs of elements
- auto-beacon-[0-2]
- auto-parking-[center / ramp]
- auto-balls-[side / center][+ / -]
- auto-ball-dislodged


*/

setup();

function setup() {
  var buttons = document.getElementsByTagName("button")

  var increasers = []
  var decreasers = []

  for (var i = 0; i < buttons.length; i++) {
    var length = buttons[i].id.length
    console.log(buttons[i].id.charAt(length - 1))
    if (buttons[i].id.charAt(length - 1) === "+") {
      buttons[i].addEventListener('click', function() {
        var input = document.getElementById(event.target.id.substring(0, event.target.id.length - 1))
        console.log(input)
      }, false)
    } else if (buttons[i].id.charAt(length - 1) === "-"){
      buttons[i].addEventListener('click', function() {
        console.log("DECREASED!!!")
      }, false)
    }
  }


}

document.addEventListener('click', function() {
  if (event.target.className.indexOf("increase") !== -1) {
    console.log("testing 123")
  }

})
