import { ajax } from '../helpers/ajax.js'
import api from '../helpers/wp_api.js'
import { PostCard } from './PostCard.js';


export function Router(){

    const d = document,
    w = window,
    $main = d.getElementById("main");

    let { hash } = location;

    console.log(hash);

    $main.innerHTML = null;

    if(!hash || hash === "#/"){
        ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                //console.log(posts);
                let html = "";
                posts.forEach((post) => html += PostCard(post));
                d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;
            }
        });
    } else if(hash.includes("#/search")){
        $main.innerHTML = "<h2>Seccion del Buscador</h2>";
    } else if(hash === "#/contacto"){
        $main.innerHTML = "<h2>Seccion del Contacto</h2>";
    } else {
        $main.innerHTML = "<h2>Aqui cargara el contenido del post previamente seleccionado</h2>";
    }

    
} 