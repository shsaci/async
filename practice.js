
function seeWombat(message, callback) {
  setTimeout (function () {
    callback (null, message)
  }, 2000)
}

function callback (err, msg) {
  if (err) {
    return console.error(err)
  }
  console.log("The result was", msg)
}

seeWombat("gidday", callback)
