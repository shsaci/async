
function getGroceries () {
  buyFruit(eatFruit)
}

function eatFruit (err, fruit) {
  if(!err) {
    console.log('eating ' + fruit)
  } else {
    console.log(err.message)
  }
}

function buyFruit (deliver) {
  console.log('starting')
  setTimeout(function () {
    deliver(null, 'bananas')
    // or
    // var err = new Error('fuit is sold out')
    // deliver(err, null)
  }, 5000)
}
getGroceries ()
