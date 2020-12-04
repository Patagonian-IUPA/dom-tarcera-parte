//const btn = document.getElementById("btnEventTest");
const btn = document.querySelector("#btnEventTest");

/* btn.onclick = function() {
    console.log("Me hicieron click! DOM Level 0");
}

btn.onclick = function() {
    console.log("Me hicieron click! DOM Level 0 test1");
}

btn.onclick = function() {
    console.log("Me hicieron click! DOM Level 0 test2");
}

btn.onclick = null; */

/* btn.addEventListener('click', () => {
    console.log("Click en el boton!");
}) */


btn.addEventListener('mousedown', manejaClick);
btn.addEventListener('mouseup', manejaClick3);

btn.addEventListener('click', manejaClick2);

btn.removeEventListener('click', manejaClick);

function manejaClick() {
    console.log("Me hicieron mouse down click!");
}

function manejaClick3() {
    console.log("Me hicieron mouse up click!");
}
let contarClick = 0;

function manejaClick2(e) {
    /* console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.classList);
     */

    /* console.log(e.clientX);
    console.log(e.clientY);
    */

    /*  console.log(e.offsetX);
     console.log(e.offsetY); */

    contarClick++;
    document.getElementsByClassName("title")[0].textContent = "Me cambió un click!! --> " + contarClick;
    document.getElementsByClassName("title")[0].classList.add("btn-success")
    console.log("Me hicieron click en evento 2!");
}

const itemText = document.getElementById("addItemText");

/* itemText.addEventListener('keypress', manejaEvento);
itemText.addEventListener('keyup', manejaClick3);
itemText.addEventListener('keydown', manejaClick2); */

/* itemText.addEventListener('blur', manejaEvento)

function manejaEvento(e) {
    if (e.target.value === "") {
        alert("Ingese un valor");
    }
    console.log(e);
} */

const box = document.getElementById("box");

/* box.addEventListener('mouseenter', manejaMouseEnter)
box.addEventListener('mouseleave', manejaMouseEnter)

box.addEventListener('mouseover', manejaMouseEnter)
box.addEventListener('mouseout', manejaMouseEnter) */
box.addEventListener('mousemove', manejaMouseEnter)

function manejaMouseEnter(e) {
    console.log(e.offsetX, e.offsetY);

    document.body.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 50)'

    document.body.style.backgroundColor =
        `rgb(${e.offsetX}, ${e.offsetY}, 50)`;
}

const sele = document.getElementById('miselect');

sele.addEventListener('input', e => {
    console.log(e.target.value)
})