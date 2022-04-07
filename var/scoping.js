var diskon = 500 //Global scope
if (true) {
    var diskon = 300 // Global scope
}

console.log(diskon);

output : 300

var diskon = 500;
function diskonScope (){
    var diskon = 300;
    console.log(diskon);
}
diskonScope()
console.log(diskon);

// --------------------------------------------------------------