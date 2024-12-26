const button = document.getElementsByClassName("btn")[0];

function changer() {
    const color = Math.floor(Math.random() * 1000000);
    const col = "#" + color;
    document.body.style.backgroundColor = col;
    button.textContent = col;
}