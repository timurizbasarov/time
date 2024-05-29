let counter = 0; 
 
let minus = document.getElementById("bs"); 
let val = document.getElementById("val"); 
let plus = document.getElementById("rols"); 
let reset = document.getElementById("reset"); 
 
plus.addEventListener("click", () => { 
    counter = counter + 1; 
    val.innerHTML = counter; 
});
 
minus.addEventListener("click", () => { 
    counter = counter - 1;
    val.innerHTML = counter; 
}); 
 
reset.addEventListener("click", () => { 
    counter = 0; 
    val.innerHTML = counter; 
});