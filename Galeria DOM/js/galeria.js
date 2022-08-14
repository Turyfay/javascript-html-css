window.onload = ()=>{
    const fotos = document.querySelector("div");

    fotos.addEventListener("click",(e)=>{
        if(e.target.tagName === "IMG"){
            //Crear fondo negro
            const fondoNegro = document.createElement("div");
            fondoNegro.id = "fondo";
            document.body.appendChild(fondoNegro);
            //Estilo del fondo negro
            fondoNegro.style.position = "absolute";
            fondoNegro.style.top = 0;
            fondoNegro.style.backgroundColor = "rgba(0,0,0,0.5)";
            fondoNegro.style.cursor = "pointer";
            fondoNegro.style.zIndex = 1;

            //dimensiones 
            fondoNegro.style.width = window.innerWidth + "px";
            fondoNegro.style.height = window.innerHeight + "px";
            fondoNegro.style.top = window.scrollY +"px";
            fondoNegro.style.left = window.scrollX +"px";


            //Crear imagen


            const imagenMini = e.target.src;
            const archivo = imagenMini.substr(imagenMini.length - 10,10);
            const imagenGrande = "img/fondos/"+archivo;
            const imagen = document.createElement("img");
            imagen.id = "imagen";
            imagen.src = imagenGrande;
            imagen.style.display = "block";
            imagen.style.position = "absolute";
            imagen.style.zIndex = 2;

            imagen.addEventListener("load",function(){
                 centrar(this);
                fondoNegro.appendChild(imagen);
            },false);

            imagen.addEventListener("click",(e)=>{
                if(fondoNegro){
                   fondoNegro.parentNode.removeChild(fondoNegro); 
                }
            },false);

        }else{
            console.log("Lo sentimos, no seleccionastes una imagen");
        }
    },false);
}

const centrar = (imagen) => {
    const x = (window.innerWidth - imagen.width) / 2;
    const y = (window.innerHeight - imagen.height) / 2;
    imagen.style.top = y + "px";
    imagen.style.left = x + "px";
    return imagen;
}