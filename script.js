const flores = document.getElementById("flores");

const intro = document.getElementById("intro");
const entrar = document.getElementById("entrar");

const app = document.getElementById("app");

const musicButton = document.getElementById("musicButton");
const musica = document.getElementById("musica");


/* =========================================
   LÍRIOS
========================================= */

for (let i = 0; i < 15; i++) {

    const lirio = document.createElement("img");

    lirio.src = "assets/img/lirio.png";
    lirio.className = "lirio";

    lirio.style.left =
        Math.random() * 100 + "vw";

    lirio.style.width = "45px";
    lirio.style.height = "45px";

    lirio.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    lirio.style.animationDelay =
        Math.random() * 6 + "s";

    flores.appendChild(lirio);
}


/* =========================================
   ABRIR CARTA
========================================= */

entrar.addEventListener("click", function () {

    intro.classList.add("saindo");

    setTimeout(function () {

        app.classList.add("visivel");

    }, 500);

});


/* =========================================
   MÚSICA
========================================= */

musicButton.addEventListener("click", async function () {

    try {

        if (musica.paused) {

            await musica.play();

            musicButton.classList.add("tocando");

        } else {

            musica.pause();

            musicButton.classList.remove("tocando");

        }

    } catch (erro) {

        console.log(
            "Não foi possível tocar a música:",
            erro
        );

    }

});


/* =========================================
   MÚSICA TERMINOU
========================================= */

musica.addEventListener("ended", function () {

    musicButton.classList.remove("tocando");

});