window.onload = ()=>{
    const fotos = document.querySelector("div");

    fotos.addEventListener("click",(e)=>{
        if(e.target.tagName === "IMG"){
            const imagenMini = e.target.src;
            const archivo = imagenMini.substr(imagenMini.length - 10,10);

            console.log(archivo);
        }else{
            console.log("Lo sentimos, no seleccionastes una imagen");
        }
    },false);
}