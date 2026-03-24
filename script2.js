
let p= document.querySelector("p")

function aloo (){
    p.style.color="orange";}
p.addEventListener("click",aloo);
p.addEventListener("dblclick",aloo);

p.removeEventListener("click",aloo);

// // let intput= document.querySelector("input");

// let myInput = document.querySelector("input");

// // Listen for any change (typing, deleting, pasting)
// myInput.addEventListener("input", function() {
    
//     // Just grab whatever is currently inside the box
//     let currentText = myInput.value;
    
//     // Show it in the console
//     console.log("The name is currently: " + currentText);



// let sel =document.querySelector("select");
// let device= document.querySelector("#device")
// sel.addEventListener("change",function(dets){
//     device.textContent= "Device Selected";
//     console.log(dets.target.value);
// });


