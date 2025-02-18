document.getElementById("bottone").addEventListener("click", () => {
    let img = document.getElementById("immagine");

    if (img.src.includes("./assets/img/white_lamp.png")) {
        img.src = "./assets/img/yellow_lamp.png";
    } else {
        img.src = "./assets/img/white_lamp.png";
    }
});


