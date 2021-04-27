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
"Soy una diseñadora gráfica actualmente incursionando en la programación. Principalmente me interesa el <a href='https://miligaleano.github.io/developer-portfolio' target='_blank' class='linkcv'>desarrollo frontend</a>. Me encanta encarar proyectos que me desafíen a aprender cosas nuevas, amo dibujar y hacer cosas simples y lindas a través del diseño.",
'Si querés saber un poco más sobre mí descargá mi CV <a href="doc/Galeano Milagros CV.pdf" download target="_blank" class="linkcv" >acá.</a>',
'programación', 'diseño', 'educación', 'Diseño gráfico', 'Ilustraciones', 'Diseño editorial', 'Identidad visual', 'Dejá un mensaje',
'Si te gustó lo que hago o querés hacerme alguna pregunta, dejame un mensaje y te contesto lo más rápido que pueda!',
'Nombre:', 'Mensaje:', 'enviar', 'Gracias por pasar!'
];

let english = ['about me', 'my work', 'contact me', 'Graphic designer <br>& Front-end developer', 
'I enjoy creating beautifully simple things. I design. I code. I draw. I love what I do.',
'Who am I?', 'Hi! First of all, thank you for visiting my website!',
"I'm a graphic designer and newbie <a href='https://miligaleano.github.io/developer-portfolio' target='_blank' class='linkcv'>developer</a> mostly interested in Front-end development. I really enjoy doing projects that challenge me to learn new things.",
"If you'd like to know more about me click <a href='doc/Galeano Milagros Resume.pdf' download target='_blank' class='linkcv' >here</a> to see my resume.",
'dev tools', 'design tools', 'education', 'Graphic design', 'Illustrations', 'Editorial design', 'Visual identity',
'Leave a comment', "If you'd like to work with me or have any questions about my work, please leave me a message and I will contact you as soon as possible.",
'Name:', 'Message:', 'SEND', 'Thanks for watching!'
];

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

        if (language === 'true') {
            let menulan = document.getElementsByClassName('menulan');
            for (let i = 0; i<menulan.length; i++) {
                menulan[i].innerHTML = spanish[i];
            }
            let lanbutton = document.getElementById('idioma');
            lanbutton.value= 'english';
            lanbutton.setAttribute('onclick', 'changelang(english)');
    }
};
