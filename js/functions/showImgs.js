const worksContainer = document.querySelector('#showWorks');

const srcWorks = [
    {
        authors: ["Luiz Guilherme", "Maria Fernanda", "Maria Julia", "Stefanny"],
        work: "./assets/img/works/work1.png",
    },
    {
        authors: ["Indefinido"],
        work: "./assets/img/works/work2.png",
    },
    {
        authors: ["Diogo Augusto"],
        work: "./assets/img/works/work3.png",
    },
    {
        authors: ["Clube de Jogos"],
        work: "./assets/img/works/work4.png",
    },
    {
        authors: ["Maria Eduarda Faria", "Maria Eduarda Domingos"],
        work: "./assets/img/works/work5.png",
    },
    {
        authors: ["Clube de Jogos"],
        work: "./assets/img/works/work6.png",
    },
    {
        authors: ["Indefinido"],
        work: "./assets/img/works/work7.png",
    },
    {
        authors: ["Luciana"],
        work: "./assets/img/works/work8.png",
    },
    {
        authors: ["Victor Miguel", "Sebastyan Spira"],
        work: "./assets/img/works/work9.png",
    },
    {
        authors: ["Maria Eduarda Barone"],
        work: "./assets/img/works/work10.png",
    },
    {
        authors: ["Arielle Siqueira"],
        work: "./assets/img/works/work11.png",
    },
    {
        authors: ["Luana"],
        work: "./assets/img/works/work12.png",
    },
];

srcWorks.forEach((works) => {
    worksContainer.innerHTML += `
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
    `;
});