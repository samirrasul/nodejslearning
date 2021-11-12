function showMessage() {
    let username = "Jim"
    let message = "Hello " + username
    console.log(message)
}

showMessage()

function showMessage(from, text) {
    console.log(from + ":" + text)
}

showMessage("Jake", "Hi, dear" )