export function Loader(){
    const $loader = document.createElement("img");
    $loader.src = "app/assets/ball-triangle.svg";
    $loader.alt = "Cragando...";
    $loader.classList.add("loader");

    return $loader;
}