//configuracion basica para las animaciones
const sr=ScrollReveal({
    distance:'60px',
    duration:1500,
    easing:'cubic-bezier(0.68, -0.55, 0.265, 1.55)', //aceleracion con un ligero rebote
    reset:false // la animacion solo va a ocurrir una sola vez
});


//anima los textos de la cabecera hacia arriba
sr.reveal('.reveal-hero',{origin:'top'});


//animas las 3 tarjetas
sr.reveal('.reveal-card',{
    origin:'bottom',
    interval:250
});

//animacion de la seccion de contacto
sr.reveal('.reveal-title',{origin:'top'});
sr.reveal('.reveal-left',{origin:'left',delay:200});
sr.reveal('.reveal-right',{origin:'right',delay:200});