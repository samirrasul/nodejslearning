function ask(question, showOK, showCancel) {
    if (question) showOK()
    else showCancel();
}

function showOk() {
    console.log( "You agreed." );
}

function showCancel() {
    console.log( "You canceled the execution." );
}

ask(false, showOk, showCancel);