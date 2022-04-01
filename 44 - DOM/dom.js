


// console.log("*****Elementos del documento*****");
// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);


// ***** Gets Elements y Query*****
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
// console.log(document.getElementById("menu"));
// console.log(document.querySelector("a"));//Tiene la misma funcion de agregar por id que getElementById, tambien es un poco mas lento
// console.log(document.querySelectorAll("a"));
// document.querySelectorAll("a").forEach((el) => console.log(el));




//**** Atributos y Data-attributes****
// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = "en";
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute("lang","es-MX");
// console.log(document.documentElement.lang);

// const $linkDOM = document.querySelector(".link-dom");





//*****ESTILOS Y VARIABLES EN CSS ***** */

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM));
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration","none");
// $linkDOM.style.setProperty("display","block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign  = "center";
// $linkDOM.style.marginLeft  = "auto";
// $linkDOM.style.padding  = "1rem";
// $linkDOM.style.borderRadius  = ".5rem";


// document.cookie.SameSite=None


// *****Variables CSS-Custom Properties CSS****

// const $html = document.documentElement,
//     $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//     varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor,varYellowColor);


// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;


// $html.style.setProperty("--dark-color","#000");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color",varDarkColor);





// ***** Clases CSS *****

// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// $card.classList.remove("rotate-45");
// $card.classList.toggle("rotate-45");
// $card.classList.toggle("rotate-45");



// ***** Texto y HTML *****

// const $whatIsDOM = document.getElementById("que-es");

// let text = `


// <p>
//     El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>)es una API para documentos HTML y XML
// </p>
// <p>
//     Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
// </p>
// <p>
//     <mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark>
// </p>
// `

// $whatIsDOM.innerText = text;
// $whatIsDOM.textContent = text;
// $whatIsDOM.innerHTML = text;




//***** Traversing: Recorriendo el DOM */

// const $cards = document.querySelector(".cards")

// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);

// SameSite = None;



// //*****Creando Elementos y Fragmentos***** */

// const $figure = document.createElement("figure");
//     $img = document.createElement("img");
//     $figcaption = document.createElement("figcaption");
//     $figcaptionText = document.createTextNode("Animals");
//     $cards = document.querySelector(".cards");


// $img.setAttribute("src","https://placeimg.com/200/200/animals");
// $img.setAttribute("alt","Animals");
// $figure.classList.add("card");


// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);


// $figure2.innerHTML = `
// <img src="https://placeimg.com/200/200/People" alt="People">
// <figcaption>People</figcaption>
// `;

// $figure2.classList.add("card");
// $cards.appendChild($figure2);

// const estaciones = ["Primavera","Verano","Otoño","Invierno"],
//     $ul = document.createElement("ul");

// document.write("<h3>Estaciones del año</h3>");

/* ---=== TEMPLATES HTML ===--- */
// const $cards = document.querySelector(".cards"),
//     $template = document.getElementById("template-card").content,
//     $fragment = document.createDocumentFragment(),
//     cardContent = [
//         {
//         title: "Tecnologia",
//         img: "https:/placeimg.com/200/200/tech",
//         },
//         {
//         title: "Animales",
//         img: "https:/placeimg.com/200/200/animals",
//         },
//         {
//         title: "Arquitectura",
//         img: "https:/placeimg.com/200/200/arch",
//         },
//         {
//         title: "Gente",
//         img: "https:/placeimg.com/200/200/people",
//         },
//         {
//         title: "Naturaleza",
//         img: "https:/placeimg.com/200/200/nature",
//         },
//     ];

//     cardContent.forEach(el => {
//         $template.querySelector('img').setAttribute("src", el.img);
//         $template.querySelector('img').setAttribute("alt", el.title);
//         $template.querySelector('figcaption').textContent = el.title;

//         let $clone = document.importNode($template, true);
//         $fragment.appendChild($clone)
//     });

//     $cards.appendChild($fragment);

/*---==== MODIFICANDO ELEMENTOS (OLD STYLE) ====--- */
// const $cards = document.querySelector(".cards"),
//     $newCard = document.createElement("figure");
//     $cloneCards = $cards.cloneNode(true);

//     $newCard.innerHTML = `
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//             <figcaption>Any</figcaption>
//     `
//     $newCard.classList.add("card");

    //$cards.replaceChild($newCard, $cards.children[2]);
    //$cards.removeChild($cards.lastElementChild)
    // $cards.insertBefore($newCard, $cards.firstElementChild);
    //document.body.appendChild($cloneCards)




/*---==== MODIFICANDO ELEMENTOS (COOL STYLE) ====--- */
    /*
    insertAdjacent...
        .insertAdjacentElement(position, el)
        .insertAdjacentHTML(position, html)
        .insertAdjacentText(position, text)

    Posiciones:
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        beforeend(ultimo hijo)
        afterend(hermano siguiente)
    */

        // const $cards = document.querySelector(".cards"),
        //     $newCard = document.createElement("figure");
        
        
        //     $newCard.innerHTML = `
        //     <img src="https://placeimg.com/200/200/any" alt="Any">
        //     <figcaption>Any</figcaption>
        //     `;

        // $newCard.classList.add("card");

        // $cards.insertAdjacentElement("beforebegin", $newCard);

        
        
    /*----==== MANEJADORES DE EVENTOS (Event handle)r====----*/
    // function holaMundo(){
    //     alert("Hola Mundo");
    //     console.log(Event);
    // }

    // const $eventoSemantico = document.getElementById("evento-semantico");
    // const $eventoMultiple = document.getElementById("evento-multiple");

    // $eventoSemantico.onclick = holaMundo;
    // $eventoSemantico.onclick = function (){
    //     alert("Hola mundo manejador de eventos semantico")
    //     console.log(Event);
    // }

    // $eventoMultiple.addEventListener('click', holaMundo);
    // $eventoMultiple.addEventListener('click', (Event) => {
    //     alert("Hola manejador de eventos multiple");
    // });



    

