function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction(NamedFunc){
    return function NamedFunc() {
        console.log("This better work.")
    }
}

function returnsAnAnonymousFunction(){
    return ()=> console.log ("Is that a Nyan Cat in the thingy?")
}