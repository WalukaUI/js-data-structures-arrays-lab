// Write your solution here!
const drivers=['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(a){
    drivers.push(a)
}
function destructivelyPrependDriver(a){
    drivers.unshift(a)
}
function destructivelyRemoveLastDriver(b){
    drivers.pop(b)
}
function destructivelyRemoveFirstDriver(c){
    drivers.shift(c)
}
function appendDriver(na){
    const newA=[...drivers, na]
    return newA
}
function prependDriver(me){
    const newB=[me, ...drivers]
    return newB 
}
function removeLastDriver(){
    return drivers.slice(0, drivers.length-1)
}
function removeFirstDriver(){
    return drivers.slice(1)
}