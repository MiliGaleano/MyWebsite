console.log('gracias por visitar mi página!')

// abrir imagen grande en my work - ilustraciones
function abrirgrande(a){
   let obtenerdiv = document.getElementById("modalfotos");
    obtenerdiv.style.display= "flex";
    obtenerdiv.setAttribute("onclick", "cerrargrande()");
   let contenidoh2 = a.id;
    document.getElementById("modalgrande").src= "img/" + contenidoh2 + ".jpg";
    document.getElementById("titulomodal").innerHTML= contenidoh2;
}

function cerrargrande(){
    document.getElementById("modalfotos").style.display= "none";
}

// cambiar a gif en my work - sistemas
var chequearfoto = document.getElementById("sistemarevista");
function cambiaragif(){
    chequearfoto.src= "img/gifrevista.gif";
    chequearfoto.setAttribute("onclick", "cambiarafoto()");
    setTimeout(cambiarafoto, 14000);
}
function cambiarafoto(){
    chequearfoto.src= "img/fotorevista.jpg";
    chequearfoto.setAttribute("onclick", "cambiaragif()");
}

//my work - editorial
function cambiardiario(){
   let diariofotos = document.getElementsByClassName("diariofoto");
   let diariofotosid = diariofotos.item(0).id;
   let numeroid = diariofotosid.length;
   let sumarletra = "d";
    if (numeroid === 6){
        diariofotos[0].src= "img/diario1.jpg";
        diariofotos[0].id= sumarletra.repeat(2);
        diariofotos[0].setAttribute("onclick", "cambiardiario()");
    } else {
        diariofotos[0].src= "img/diario" + numeroid + ".jpg";
        diariofotos[0].id= sumarletra + sumarletra.repeat(numeroid);
        diariofotos[0].setAttribute("onclick", "cambiardiario()");
    } 
 }

 function cambiarrevista(){
   let revistafoto = document.getElementsByClassName("revistafoto");
   let revistafotoid = revistafoto.item(0).id;
   let numeroidrev = revistafotoid.length;
   let sumarletra = "r";
    if (numeroidrev === 6){
        revistafoto[0].src= "img/revis1.jpg";
        revistafoto[0].id= sumarletra.repeat(2);
        revistafoto[0].setAttribute("onclick", "cambiarrevista()");
    } else {
        revistafoto[0].src= "img/revis" + numeroidrev + ".jpg";
        revistafoto[0].id= sumarletra + sumarletra.repeat(numeroidrev);
        revistafoto[0].setAttribute("onclick", "cambiarrevista()");
    } 
 }

// apply class to menu item on scroll
// 
let lastId,
 topMenu = $("#menunav"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
  let item = $($(this).attr("href"));
    if (item.length) { return item; }
 });
// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
 let href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
  let fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
  let cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
  let id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems.parent().end().removeClass("clickeado");
       menuItems.parent().end().filter("[href='#"+id+"']").addClass("clickeado");
   }                   
});

ScrollReveal().reveal('.probando', {
    distance: "30px",
    reset: true,
    delay: 300,
    useDelay: 'onload'
});

ScrollReveal().reveal('.probando2', {
    distance: '30px',
    origin: 'left',
    opacity: 0,
    delay: 100,
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.probando3', {
    distance: '30px',
    origin: 'right',
    opacity: null,
    delay: 100,
    duration: 800,
    reset: true
});

// cambiar idioma
let spanish = ['sobre mí', 'trabajos', 'contacto',
'Diseño gráfico <br>& Desarrollo front-end',
'Disfruto creando cosas simples. Diseño. Codeo. Dibujo. Amo hacer lo que hago.',
'¿Quién soy?', 'Buenas! Antes que nada, gracias por visitar mi página web!',
'Soy una diseñadora gráfica dando sus primeros pasos como desarrolladora Front-end. Disfruto encarar proyectos que me desafíen a aprender cosas nuevas, de hecho, así fué como llegué a la programación: Hace unos años tuve que darme 5 vacunas a la vez por haber perdido mi libreta. No podía creer que en esta epoca aún dependamos de unas hojas de papel para llevar registro de información tan importante. Así que decidí crear mi propia libreta para llevar en el celular.',
'En la facu había aprendido lo básico de HTML y CSS, y con la ayuda de Stack Overflow y tutoriales de Youtube aprendí los conceptos principales de JavaScript como para empezar. Todo el proceso fué un desafío porque mi nivel era muy básico, pero al final conseguí lograr una aplicación que funcionaba -la mayoría del tiempo-. Ver funcionando algo programado por mí fué una sensación increíble, y descubrí que esto es a lo que me quiero dedicar. Desde entonces profundicé mis conocimientos de JavaScript y comencé a aprender React. Siento que es el momento de desafiarme con un puesto que me permita seguir aprendiendo y al mismo tiempo aportar mis conocimientos e ideas para cumplir objetivos reales.',
'Si querés saber un poco más sobre mí descargá mi CV <a href="doc/Galeano Milagros CV.pdf" download target="_blank" class="linkcv" >acá.</a>',
'programación', 'diseño', 'educación', 'Diseño gráfico', 'Proyectos',
'Aplicación que te permite llevar registro de las series que miraste, armar tu lista de favoritas y encontrar nuevas cosas para mirar.', 'VER PROYECTO ➟',
'Aplicación que te ayuda a llevar la libreta de vacunación encima, leer novedades sobre salud y encontrar el centro de vacunación más cercano.', 'VER PROYECTO ➟',
'Web de turismo Argentino. Descubre a dónde ir y qué hacer mientras recorres el país. Encuentra mapas e información del clima actual y extendido.', 'VER PROYECTO ➟',
'Sitio web de Deimos & Fobos, promocionando su nueva serie documental y el lanzamiento de su juego de realidad virtual.',
'Página donde puedes armar diferentes tipos de rompecabezas de Tutor y Fighter. Versión clásico o deslizante.','Registro de usuarios almacenados en LocalStorage.',
'Ilustraciones', 'Diseño editorial', 'Identidad visual', 'Dejá un mensaje',
'Si te gustó lo que hago o querés hacerme alguna pregunta, dejame un mensaje y te contesto lo más rápido que pueda!',
'Nombre:', 'Mensaje:', 'enviar', 'Gracias por pasar!'
];

let english = ['about me', 'my work', 'contact me', 'Graphic designer <br>& Front-end developer', 
'I enjoy creating beautifully simple things. I design. I code. I draw. I love what I do.',
'Who am I?', 'Hi! First of all, thank you for visiting my website!',
"I'm a graphic designer and newbie developer mostly interested in Front-end development. I really enjoy doing projects that challenge me to learn new things. Thats how I had my first experience with programming: A few years ago I received 5 shots in one go because I couldn't find my Innmunization records. I thought it was unbelievable that we still depend on a sheet of paper to keep that kind of relevant information, so I decided to make my own vaccination registry.",
"I knew a little HTML and CSS from a class I took while studying for my degree. With the help of Stack Overflow and Youtube I teached myself some JavaScript and started. I intended to add a lot of functionalities that were obviously way above my capacities, but in the end I managed to do something that worked -kinda-. It was SO cool to see something useful made by myself, I was convinced that was what I wanted to do. Since then, I've been polishing my Javascript and learning React, mostly trough online courses and reading documentation. Whenever I learn something new I go back to my little project and try to improve it. I think I'm ready to take in a full-time role where I can continue to learn and at the same time help a company achieve their goals.",
"If you'd like to know more about me click <a href='doc/Galeano Milagros Resume.pdf' download target='_blank' class='linkcv' >here</a> to see my resume.",
'dev tools', 'design tools', 'education', 'Graphic design', 'Projects', 
'A watchlist app where you can keep track of the things you have watched, make your favourites list and find new things to watch.', 'VIEW PROJECT ➟',
'An app to keep your Immunization registry organized. Save your vaccination records and find the nearest place to take your next vaccine.', 'VIEW PROJECT ➟',
'A web where you can find where to go and what to do while travelling in Argentina. Check maps and currently and extended weather info.', 'VIEW PROJECT ➟',
'Deimos & Fobos website. Promoting the launching of their new documental series and virtual reality game.',
'A web where you can play with Tutor and Fighter jigsaw puzzles. There are two different types of games.','LocalStorage based registry of users.',
'Illustrations', 'Editorial design', 'Visual identity',
'Leave a comment', "If you'd like to work with me or have any questions about my work, please leave me a message and I will contact you as soon as possible.",
'Name:', 'Message:', 'SEND', 'Thanks for watching!'
];

let project1 = ['Tu aplicación BL', 
'BLessed es una aplicación web creada como proyecto personal. Te permite llevar registro de las series y películas que viste, armar tu lista de favoritas y encontrar nuevas cosas para mirar. La base de datos se actualiza todas las semanas y actualmente cuenta con más de 200 series. El proyecto se empezó usando solo HTML, CSS y JavaScript vanilla y recientemente fue reconstruído utilizando React y Firebase.',
'Abrir app','Repositorio','Desafíos afrontados','Hojas de estilo','Ya que este proyecto fué mi primer aproximación a React, me enfrenté a muchos desafíos, uno de ellos fué la manera de incorporar estilos. Decidí utilizar una hoja de estilo para cada componente, pero al ser la primera vez usando esta metodología terminé cometiendo errores y algunas clases comenzaron a superponer otras, especialmente cuando apliqué medias queries. Tuve que controlar y modificar cada componente muchas veces hasta conseguir un buen resultado. En próximos proyectos voy a probar diferentes formas de aplicar estilos para encontrar con cuál me siento más cómoda.',
'Base de datos','Firestore me resultó fácil de entender y no afronté muchos problemas a la hora de utilizarlo, la parte complicada fué la de decidir cómo organizar las colecciones y documentos para que puedan ser fácilmente modificados cada vez que un usuario realiza un cambio en sus listas. Una vez que definí el diseño de la base de datos, comencé a buscar la información necesaria, pero ya que estas series no son muy populares no encontré mucha información organizada y tuve que hacerlo yo misma. Actualmente hay más de 200 series y todas las semanas sumo algunas.',
'Barra de búsqueda','Esta fué la primera funcionalidad que le sumé al proyecto, me introdujo al concepto de "estado del componente" y me llevó a aprender sobre React Hooks. Con la ayuda de UseState y UseEffect logré conseguir de manera rápida y eficiente una barra de búsqueda. Una vez que entendí la teoría fué fácil de aplicar y replicarla en otros sectores con distintos filtros. No tuve grandes dificultades, de hecho me terminó llevando más tiempo hacer esa pequeña animación en el ícono de búsqueda que la funcionalidad en sí. 😅',
'Lo que aprendí','React! Fué mi primera vez usandolo después de aprender mediante tutoriales, pero meter las manos en el código es la mejor forma de terminar de aprender. Entendí un monton de cosas que en la teoría no había terminado de comprender. Componentes funcionales, props, estados, Hooks, Context!, estaba convencida que usar el contexto era demasiado dificíl para mi nivel así que intenté esquivarlo hasta último momento, perdí una semana intentando pasar información entre algunos componentes hasta que decidí probarlo. Al principio me costó entender como funciona, pero una vez que logré aplicarlo me resolvió un montón de problemas. También aprendí que hay muchas cosas, como estructura y organización, que necesito seguir mejorando, así que voy a seguir estudiando y practicando en diferentes proyectos y volver a este una vez que sepa más para mejorarlo.',
'Gracias por leer!','PRÓXIMO PROYECTO ➟']

let project2 = ['Llevá la libreta de vacunación en el celular',
'VacunAr es una aplicación web creada como proyecto personal. Te permite llevar el registro de vacunación de toda la familia, descargarlos en PDF, guardar eventos, leer las últimas noticias de salud y encontrar los centros de vacunación cercanos a tu ubicación. Este proyecto fué mi primer acercamiento a la programación y desde entonces fué creciendo y mutando constantemente, en la última versión se implementó el uso de Google Calendar.',
'Abrir app','Repositorio','Desafíos afrontados','React Bootstrap',
'Al ser la primera vez que utilizaba esta librería me encontré con algunas complicaciones. La documentación es muy buena por lo que la implementación fué bastante simple, y el no tener que preocuparme por el diseño responsive fué un gran plus. El problema fue que quería implementar algunos estilos extra a los que ofrece Bootstrap y terminé recurriendo a los estilos en líneas, que no estoy segura sean una buena práctica.',
'Here Maps y Buenos Aires Data','La inicialización del mapa y la obtención de coordenadas del usuario para centrarlo fué sencilla, el problema se me presentó al personalizar los marcadores y las burbujas desplegables de cada centro de vacunación. Al intentar obtener la info desde Buenos Aires Data se me presentaron problemas de cors, lo que llevaba al mapa a dejar de funcionar completamente. Si bien encontré una solución, también agregué una lista creada por mí por si algún dispositivo sigue encontrándose con el problema.',
'jsPDF y Google Calendar','Probablemente la implementación de Google Calendar API fué lo que más desafíos me presentó, no la parte de incluirla en el código sino la cantidad de registros necesarios para aprobar su uso. Por último, al implementar jsPDF me resultó complicada la inclusión de imágenes y la ubicación de los elementos en el documento, y los estilos necesitan una actualización porque quedaron muy básicos, así que tengo en que seguir trabajando. 😅',
'Lo que aprendí','VacunAr es un proyecto al que le tengo mucho cariño porque fue lo que me acercó a la programación. Esta es la tercera vez que creo la aplicación de cero, esta última versión me ayudó a solidificar mis conocimientos de React, como el uso de Hooks y la actualización de estados. Me enfoqué mucho en tratar de mantener los componentes lo más reusables posible. También gané un montón de práctica en integración de APIs.',
'Gracias por leer!','PRÓXIMO PROYECTO ➟']

function changelang(x) {
    let menulan = document.getElementsByClassName('menulan');
    for (let i = 0; i<menulan.length; i++) {
        menulan[i].innerHTML = x[i];
    }
    let lanbutton = document.getElementById('idioma');
    if (x === spanish) {
        lanbutton.value= 'english';
        lanbutton.setAttribute('onclick', 'changelang(english)');
        let eng = true;
        sessionStorage.setItem('language', eng);
    } else {
        lanbutton.value= 'español';
        lanbutton.setAttribute('onclick', 'changelang(spanish)');
        let eng = false;
        sessionStorage.setItem('language', eng);
    }
}

window.onload = function() {
let language = sessionStorage.getItem('language');
   if (window.location.href.indexOf('project1.html') !== -1) {
        if (language === 'true') {
            let lan1 = document.getElementsByClassName('lan1');
            for (let i = 0; i<lan1.length; i++) {
                lan1[i].innerHTML = project1[i];
            }
        }
   } else if (window.location.href.indexOf('project2.html') !== -1) {
        if (language === 'true') {
            let lan2 = document.getElementsByClassName('lan2');
            for (let i = 0; i<lan2.length; i++) {
                lan2[i].innerHTML = project2[i];
            }
        }
   } else {
        // scroll inicial
        if (window.location.href.indexOf('index.html') !== -1) {
            $(document).ready(function () {
                let $horizontal = $('.horizontal');
                let startPosition = $horizontal.position().left;
                let speed = 60;
                $(window).scroll(function () {
                    let st = $(this).scrollTop();
                    let newPos = (st * (speed/100)) + startPosition;
                    $horizontal.css({
                        'left': newPos
                    });
                });
            });
        }

        if (language === 'true') {
            let menulan = document.getElementsByClassName('menulan');
            for (let i = 0; i<menulan.length; i++) {
                menulan[i].innerHTML = spanish[i];
            }
            let lanbutton = document.getElementById('idioma');
            lanbutton.value= 'english';
            lanbutton.setAttribute('onclick', 'changelang(english)');
    }
}
};
