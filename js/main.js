let idd=0;
for(let i=0;i<6;i++){
    let divi=document.getElementsByClassName("l"+(i+1))[0]
    for(let j=0;j<5;j++){
        let inpbox=document.createElement("input");
        inpbox.type="text";
        inpbox.maxLength="1";
        inpbox.className="input-box";
        inpbox.style.height="35px";
        inpbox.style.width="35px";
        inpbox.style.textAlign="center";
        inpbox.style.fontSize="20px";
        inpbox.style.caretColor="transparent";
        idd=idd+1;
        inpbox.id="input"+idd;
        divi.appendChild(inpbox);
    }

}

let div2 = document.getElementsByClassName("d2")[0];

for (let i = 0; i < 26; i++) {
let btn = document.createElement("button"); // Create button
btn.textContent = String.fromCharCode(65 + i); // A-Z Letters
btn.style.width = "50px"; // Adjust width
btn.style.height = "50px"; // Adjust height
btn.style.fontSize = "18px"; // Increase text size
btn.style.cursor = "pointer"; // Show pointer on hover
btn.value = String.fromCharCode(65 + i); // Set value to letter
btn.onclick = function() { // Add click event
    putvalue(this);
};
div2.appendChild(btn);
}

let z=1;
function putvalue(e){ 
let val=e.value;
let upd=document.getElementById("input"+z);
upd.value=val;
    if(z<30){
        z=z+1;
    }
}

//     document.addEventListener('keydown', function(event) {
// if (event.key === 'Enter' ) {
//     z+=1;
//     // Perform desired actions here
// }
// });


document.addEventListener('keydown', function(event) {
if (event.key === 'Backspace' || event.keyCode === 8) {
// Backspace key was pressed
let upd=document.getElementById("input"+z);
upd.value="";
if(z>1){
z=z-1;
}
}
});