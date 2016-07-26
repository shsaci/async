
function seeAction() {
  var action1 = "Wombats start chasing..."
  var action2 = "Rich starts to run.."
  var action3 = "..bad ending goes here"
  setTimeout (function () {
    seeWombatAndRich (null, action1)
  }, 500)

  setTimeout (function () {
    seeWombatAndRich (null, action2)
  }, 1500)

  setTimeout (function () {
    seeWombatAndRich (null, action3)
  }, 2500)

}

function seeWombatAndRich (err, msg) {
  if (err) {
    return console.error(err)
  }
  console.log(msg)
  // setTimeout (console.log("Bad ending goes here"), 1000)
}

seeAction()
