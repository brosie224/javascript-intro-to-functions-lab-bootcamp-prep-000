function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

var lowercase = string.toLowerCase()
var uppercase = string.toUpperCase()

function sayHiToGrandma(string) {
  if (string === lowercase) {
    console.log("I can't hear you!")
  }
}

function sayHiToGrandma(string) {
  if (string === uppercase) {
    console.log("YES INDEED!")
  }
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    console.log("I love you, too.")
  }
}

/* function sayHiToGrandma(string) {
  if (string === lowercase) {
    return "I can't hear you!"
  } else if (string === uppercase) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}
*/
