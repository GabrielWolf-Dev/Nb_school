const worksContainer = document.querySelector('#showWorks');

fetch('https://raw.githubusercontent.com/GabrielWolf-Dev/Nb_school/main/api/db.json')
.then(response => response.json())
.then(data => {
    data.forEach((works) => {
        worksContainer.insertAdjacentHTML('beforeend', `
            <figure>
                <img class="works__draw" src="${works.work}" alt="Trabalho de " />
                <figcaption class="content">
                    ${
                        works.authors == "Indefinido"
                        ? ''
                        : `
                            <h2 class="subtitle">Integrantes:</h2><!--subtitle-->
                            <p>${works.authors}</p>
                        `
                    }
                </figcaption>
            </figure><!--works__draw-->
            <hr class="container bar--black"><!--bar-->
        `);
    });
})
.catch(error => console.log(error));
