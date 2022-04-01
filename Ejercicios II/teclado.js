
const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage);
    console.log(e.keyCode);
    console.log(e.key);
}

//const move = (direction) => {}

switch(e.keyCode){

    case 37:
        //move("left");
        x--;
    break;
    case 38:
        //move("up");
        y--;
    break;
    case 39:
        //move("right");
        x++;
    break;
    case 40:
        //move("down");
        y++;
    break;

    default:
        break;
}
$ball.style.transform = `trasnlate(${x*10}px, ${y*10}px)`;

export function shortcuts (e) {
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`ctrl: ${e.ctrlKey}`);
    // console.log(`alt: ${e.ctrlKey}`);
    // console.log(`shift: ${e.ctrlKey}`);
    // console.log(e);

    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }

    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado");
    }

    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado una aviso con el teclado");
    }
}