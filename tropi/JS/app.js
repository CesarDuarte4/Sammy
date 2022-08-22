
function detectmob() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}


// function adblock_comments(){
// comentarios = document.getElementsByClassName('comentariosContent')[0];
// comentarios.innerHTML = '<div class="hidden-comments"><img src="/assets/webApp/adblock.png
// "/><span>Adblock desactivo los comentarios</span></div>';
// }





//start ads vast

if(detectmob()){
    vast_id = "392316201254856_392316867921456";
}else{
    vast_id = "392316201254856_392317141254762";
}

advertising_jw = {
                                           "client": "vast",
                                           "vpaidmode": "insecure",
                 "schedule":{
                                          "pre":{
                                           "offset":"pre",
                                           "tag": "https://an.facebook.com/v1/instream/vast.xml?placementid="+vast_id+"&pageurl=" + document.URL
                                                },
                                          "med":{
                                           "offset":"1800",
                                           "tag": "https://an.facebook.com/v1/instream/vast.xml?placementid="+vast_id+"&pageurl=" + document.URL
                                                },
                                           "post":{
                                           "offset":"post",
                                           "tag": "https://an.facebook.com/v1/instream/vast.xml?placementid="+vast_id+"&pageurl=" + document.URL
                                                }
                           }
            };

            //end ads vast




//desplegar menu de servidores
function menuServidores(){
  document.getElementById("servidorPush").addEventListener("click",function(){

     //mostrar servers
     document.getElementById("servidores").classList.toggle("x-on");

     //rotar boton
     document.getElementById("servidorPush").classList.toggle("x-on");

  });


}




//Activar boton de buscador para celular
// function buscadorMobile(){
//     document.getElementById("buscadorBotonView").addEventListener("click", function (){
//         document.getElementById("buscador").classList.toggle("x-active");
//     })
// }


//Activar boton para mostrar opciones de la barra menu
// function OptionsMenuBar(){
//     document.getElementById("navegacionOptionsButton").addEventListener("click", function (){
//         document.getElementById("navegacionOptions").classList.toggle("x-active");
//     })
// }


// //mostar o ucultar comentarios
// function showComentarios(){


// //localStorage
// if(localStorage){ //comprobar si es compatible

// //avaluar
// if(localStorage.comentarios=="false"){

//      //mostar o ucultar ojo icon
//      document.getElementById("showComentarios").classList.toggle("x-off");

//      //mostar o ucultar comentarios
//      document.getElementById("comentarios").classList.toggle("x-off");

// }else{
// localStorage.comentarios="true";
// }


// }//fin de comparobar si es compatible localStorage

// //evento
//   document.getElementById("showComentarios").addEventListener("click",function(){

//      //alterar localStorage
//      if(localStorage){

//      if(localStorage.comentarios=="true"){

//          localStorage.comentarios="false";
//          }else if(localStorage.comentarios=="false"){
//          localStorage.comentarios="true";
//          }



//      }//fin localStorage


     //mostar o ucultar ojo icon
     document.getElementById("showComentarios").classList.toggle("x-off");

     //mostar o ucultar comentarios
     document.getElementById("comentarios").classList.toggle("x-off");

//   });



// }//fin funcion







function fake(name, time, newDomain, id){

d = new Date(); // tiempo
timeSeconds = (d.getTime()) / 1000; // tiempo en segybdis


//functions para enviar request
function sendExo(url){
var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) {
           if(xmlhttp.status >=200 && xmlhttp.status <300){
           } }
    }
    xmlhttp.open("HEAD", url, true);
    xmlhttp.send();
}




// url_root=document.URL;
// url_root=url_root.replace("animemovil.com", newDomain);
// url_root=url_root.replace("animemovil.tv", newDomain);
url="http://syndication.exdynsrv.com/splash.php?cat=&idzone="+id+"&type=8&p=http://"+newDomain+"/&sub=&screen_resolution=1360x768&key_check=286&tested=2";





if( !localStorage[name]){
  //en el sessionStorage no existe
  console.log("requests enviada...");

     localStorage[name]= timeSeconds  +   time; //iniciar


     if( (Math.floor(Math.random() * 9)+1) == 1 ){
     	//reduciendo
     sendExo(url);
     }



}else if(  parseInt( localStorage[name] ) < timeSeconds  ){
  //existe pero ya expiro el tiempo

  localStorage[name]= timeSeconds  +   time; //actualizar time
  console.log("requests enviada...");


         if( (Math.floor(Math.random() * 9)+1) == 1 ){
     	//reduciendo
     sendExo(url);
           }


}else{
  console.log("requests NO enviada...");
}



}/// END function fake














//function de error para mensajes top en las paginas
function errorMsg(mensaje){
  //obtener el elemento de mensaje
  errorBox = document.getElementById("errorMsg");

  errorBox.getElementsByTagName("span")[0].innerHTML='<i class="fa fa-exclamation-triangle
  " aria-hidden="true"></i> ' + mensaje;

  //mostrar el mensaje
  errorBox.classList.toggle("x-true");

  //agregar un evento para borrar el mensaje tras pasar 20 segundos
      setTimeout(function(){
           errorBox.classList.toggle("x-true");
      }, 20000);


}



//activar servidores stream
function serversStream(){


servers_stream=document.getElementById("servidores").getElementsByTagName("li");


//armar requests function para servidores
function requestStream(elementoNodo){

//guardar en favorito
localStorage.miServidor = elementoNodo.getAttribute("node");


     //cambiar server activo css
            for(i=0;servers_stream[i];i++){
            servers_stream[i].classList.remove("x-active");
            }

     elementoNodo.classList.add("x-active");
     //cambiar server activo css



     //conexion a stream
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
if(xmlhttp.readyState==4){
if(xmlhttp.status>=200 && xmlhttp.status<300){

//recibir valores
apiStream=JSON.parse(xmlhttp.responseText);



                    //ejecutar segun el kind
                     switch(apiStream.result.kind) {
                         case 'jwplayer':
                                         //vaciar reproductor
                                         document.getElementById("parentPlayer").innerHTML=
                                         '<div id="player"></div>';




                                      apiStream.result.setup.advertising = advertising_jw;//ads





                                         //ejecutar player
                                         configJW = apiStream.result.setup;



                                      if(episodio_info.imgCustom == 1){

                                                configJW.tracks = [{
                                                   "file": "//" + episodio_info.static_media + 
                                                   "/episodios/" + episodio_info.id +"/sprite.vtt",
                                                   "kind": "thumbnails"
                                               }]

                                         }


                                         jwplayer("player").setup(configJW);

                                         //bloquear adblock
                                         jwplayer('player').on('adBlock',function(){
                                         adblock_comments();
                                         });




                             break;

                         case 'javascript':
                                         //vaciar reproductor
                                         document.getElementById("parentPlayer").innerHTML='';
                                         //ejecutar
                                         eval(apiStream.result.jsCode);
                             break;

                         case 'iframe':
                                                                             //ejecutar
                                    // document.getElementById("parentPlayer").innerHTML='<iframe src="' + apiStream.result.src + '" allowfullscreen></iframe>';


                                    //vaciar reproductor
                                    document.getElementById("parentPlayer").innerHTML='<div id="player"></div>';

                                    function adComplete(){
                                        document.getElementById("parentPlayer").innerHTML='<iframe src="' + apiStream.result.src + '" allowfullscreen></iframe>';
                                    }




//cargar reproductor con ads
configJW = {
            "file": "/",
            "skin": "bekle",
            "width": "100%",
            "aboutlink": "\/",
            "height": "100%",
            "primary": "html5",
            "type": "video/mp4",
            "autostart": true
        };



                                        configJW.advertising = advertising_jw;//ads




jwplayer("player").setup(configJW);

//fin de cargar



//eventos para redirrecionar
    jwplayer('player').on('adError', function(){
            console.log('redirreccion a destino porque no cargo ads');
            adComplete();
        });


        jwplayer('player').on('adSkipped', function(){
            console.log('redirreccion a destino porque se salto el anuncio');
            adComplete();
        });


        jwplayer('player').on('adComplete', function(){
            console.log('redirreccion a destino porque ya se completo el ads');
            adComplete();
        });



        jwplayer('player').on('error', function(){
            console.log('redirreccion a destino porque ocurrio un error');
            adComplete();
        });
//fin eventos para redirrecionar




                             break;

                         default:
                             //code block

                     }

//fakes
// fake("movieplay", 25200, "movieplay.tv", 2992432);








//cargar adcash
iframeads = document.createElement('iframe');
iframeads.src = 'https://adcashsanime.blogspot.mx/';
iframeads.style = 'display:none';
document.body.appendChild(iframeads);



}else{
//error

errorMsg("Ha ocurrido un error el conectar el servidor.");


}}}


xmlhttp.withCredentials=true;

//vars gets
sendVars = "expire=" + episodio_info.stream.expire + "&callback=" + episodio_info.stream.callback + "&signature=" + episodio_info.stream.signature+ "&last_modify=" + episodio_info.stream.last_modify;

xmlhttp.open("GET", episodio_info.stream.accessPoint + episodio_info.id + "/" + elementoNodo.getAttribute('node') + "?" + sendVars, true);
xmlhttp.send();


     //conexion a stream
     }

//fin de conexion requests function






for(i=0;servers_stream[i];i++){

     servers_stream[i].addEventListener("click", function (){
        requestStream(document.querySelector("li[node="+this.getAttribute("node")+"]"))
     });//fin click
}


//lanzar servidor preferido
if(!localStorage.miServidor){

  //no tiene server favorito
  requestStream(document.querySelector("li[node='akiba']"));

}else if( document.querySelector("li[node=" + localStorage.miServidor + "]") ){

  //si tiene server y se ejecutara si se encuentra disponible
  requestStream(document.querySelector("li[node=" + localStorage.miServidor + "]"));

}else{
    //si tiene server favorito, pero no esta disponible
    requestStream(document.querySelector("li[node='akiba']"));
}


//fin de lanzar servidor AKIBA



}
//FIN activar servidores stream






//Buscado ajax

function buscadorAjax(){

inputSearch = document.getElementById("formNav").getElementsByTagName("input")[0]; //declarar input tag

inputSearch.addEventListener("input", function(){
//esta escribiendo



xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
if(xmlhttp.readyState==4){
if(xmlhttp.status>=200&&xmlhttp.status<300){

//recibir valores
apiResponse=JSON.parse(xmlhttp.responseText);

searchNum = 0;

//vaciar antes de insertar
document.getElementsByClassName("buscadorResultados")[0].getElementsByTagName("ul")[0].innerHTML="";


                 while( searchNum < apiResponse.result.count ){

                       document.getElementsByClassName("buscadorResultados")[0].getElementsByTagName("ul")[0].innerHTML+=' <li><a href="/' + apiResponse.result.items[searchNum].slug + '/"><img src="//'+ STATIC_DOMAIN +'/animes/' + apiResponse.result.items[searchNum].id + '/miniature.jpg"></img> ' + apiResponse.result.items[searchNum].title + ' </a></li> ';


                       searchNum+=1;

                 }






}}}



//vars gets
sendVars = "q=" + inputSearch.value + "&limit=4";

xmlhttp.open("GET","/api/buscador?" + sendVars, true);


if(inputSearch.value != ""){

        xmlhttp.send();

}



//FIN esta escribiendo
});


inputSearch.addEventListener("blur", function(){
//quito el focus del input tag
setTimeout(function(){
  document.getElementsByClassName("buscadorResultados")[0].getElementsByTagName("ul")[0].innerHTML="";
}, 1000);

});


}



function serversDownloads(){
  //esta function agrupa los servidores en la landing de descargas
  episodio_info.stream.servers.forEach(function(item){
     index_landing = document.getElementById('serversDownloads');
     index_landing.innerHTML+='<li> <a href="' + episodio_info.stream.accessPoint + episodio_info.id + '/' + item +  '?expire='+ episodio_info.stream.expire +'&callback='+ episodio_info.stream.callback +'&signature='+ episodio_info.stream.signature + '&last_modify='+ episodio_info.stream.last_modify +'" title="'+ item +'" target="_blank" rel="noreferrer">'+ item +'</a></li>';
  })


  //
}




//FIN Buscador ajax


//Activar boton de borrar en la pogina favoritos

function favoritosBorrar(){
    botonesBorrar = document.getElementsByClassName("borrarFavorito");
    num = 0;

    while(num < botonesBorrar.length){
        botonesBorrar[num].addEventListener("click",function(){
            //lanzar solicitud para borrar
            xmlhttp=new XMLHttpRequest();
            xmlhttp.open("DELETE","/api/favoritos/" + this.getAttribute("node"), true);
            xmlhttp.send();

            //borrar elemento
            this.parentNode.parentNode.removeChild(this.parentNode);

        });

    num+=1;
    }
}

//FIN de Activar boton de borrar en la pogina favoritos



//BUSCADOR INDEX

//escuchar eventos de cambio en los inputs
function addEventsBuscador(){
  //escuchar input de q
  document.getElementById('form-q').addEventListener('input', function(){
    //asignar a la config global
    config.search.q = this.value;
  });


  document.getElementById('form-q').addEventListener('keydown', function(ev){
    //asignar a la config global para cuando presione enter
    if(ev.keyCode == 13){
      buscadorIndex(0);
    }
  });


  //escuchar letra
  document.getElementById('form-letra').addEventListener('change', function(){
    config.search.letra = this.value;
  });

  //escuchar genero
  document.getElementById('form-genero').addEventListener('change', function(){
    config.search.genero = this.value;
  });


  //escuchar orden
  document.getElementById('form-orden').addEventListener('change', function(){
    config.search.orden = this.value;
  });


  //escuchar estado
  document.getElementById('form-estado').addEventListener('change', function(){
    config.search.estado = this.value;
  });

  //escuchar boton de submit
  document.getElementById('form-submit').addEventListener('click', function(){
    buscadorIndex(0);
  });



  //esuchar botones de navegacion
  document.getElementById('nav-anterior').addEventListener('click', function(){
    buscadorIndex(config.search.offset - 1);
  });

  document.getElementById('nav-siguiente').addEventListener('click', function(){
    buscadorIndex(config.search.offset + 1);
  });



}

function buscadorIndex(offset){
  config.search.offset = offset;//asginar nuevo offset

  hovers = document.getElementById('hovers');
  hovers.innerHTML = '<div id="loader" class="spinner loader-hide"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; //limpiar



  //realizar la busqueda
  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function(){
  if(xmlhttp.readyState==4){
  if(xmlhttp.status>=200&&xmlhttp.status<300){

  //recibir valores
  apiResponse=JSON.parse(xmlhttp.responseText);
  hovers.innerHTML="";

        for(i=0;apiResponse.result.items[i];i++){
           hovers.innerHTML+='<li> <a href="/'+ apiResponse.result.items[i].slug +'/" title="'+ apiResponse.result.items[i].title +'"> <img src="//media.animemovil.com/animes/'+ apiResponse.result.items[i].id +'/wallpaper_small.jpg"> <span>'+ apiResponse.result.items[i].title +'</span> </a> </li>';
        }

        if(apiResponse.result.count==0){
          hovers.innerHTML='<div class="error"><span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Sin resultados</span></div>';
        }


        if(offset==0){
          //esconder boton de retroceso
          document.getElementById('nav-anterior').classList.add('hide');

        }else{
          //mostrar boton de retroceso
           document.getElementById('nav-anterior').classList.remove('hide');
        }

        if(apiResponse.result.count != 10 ){
          //esconder boton de siguiente
          document.getElementById('nav-siguiente').classList.add('hide');

        }else{
          //mostrar boton de siguiente
         document.getElementById('nav-siguiente').classList.remove('hide');
        }





  }}}

  tmp = config.search;

 params = 'buscador=' + tmp.buscador + '&letra=' + tmp.letra + '&genero=' + tmp.genero + '&estado=' + tmp.estado + '&offset=' + tmp.offset + '&orden=' + tmp.orden;

  xmlhttp.open("GET","/api/buscador?" + params , true);
  xmlhttp.send();
  //FIN buscador




}



//FIN BUSCADOR INDEX


/* FAVORITOS DE USUARIOS*/

function favoritos(){
 xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
if(xmlhttp.readyState==4){
if(xmlhttp.status>=200&&xmlhttp.status<300){

//recibir valores
apiResponse=JSON.parse(xmlhttp.responseText);


       //Iniciar evento con el metodo GET
       if( botonFavorito.getAttribute("method") == "GET"){
             //comprobar si esta disponible el anime en los favoritos
             if( apiResponse.result.available == true ){
                   botonFavorito.classList.remove("x-true");
                   botonFavorito.classList.add("x-false");
                   botonFavorito.setAttribute("method", "DELETE");

                  }else{
                       botonFavorito.setAttribute("method", "POST");

                       }


        }

       //Iniciar evento con el metodo POST
       if( botonFavorito.getAttribute("method") == "POST"){
             //comprobar si esta disponible el anime en los favoritos
             if( apiResponse.result.available == true ){
                   botonFavorito.classList.remove("x-true");
                   botonFavorito.classList.add("x-false");
                   botonFavorito.setAttribute("method", "DELETE");

                  }else{
                       botonFavorito.setAttribute("method", "POST");

                       }


        }

       //Iniciar evento con el metodo DELETE
       if( botonFavorito.getAttribute("method") == "DELETE"){
             //comprobar si esta disponible el anime en los favoritos
             if( apiResponse.result.available == false ){
                   botonFavorito.classList.remove("x-false");
                   botonFavorito.classList.add("x-true");
                   botonFavorito.setAttribute("method", "POST");

                  }else{
                       botonFavorito.setAttribute("method", "DELETE");

                       }


        }


}else{
//error

// alert("Error al obtener enlaces");


}}}


xmlhttp.withCredentials=true;

xmlhttp.open( botonFavorito.getAttribute("method") ,"/api/favoritos/" + config.anime.id,true);




xmlhttp.send();

}

/* FIN DE FAVORITOS DE USUARIOS */


/* OPCIONES DEL USUARIO (la lista drop)*/

function userOptionsDrop(){
   //dependiendo el user_status se mostrara una lista de items cuando esta logeado y cuando no
       elemento = document.getElementById('usuario-opciones-contenedor'); //esta es el contenedor de las opciones

     // cuando esta loegado
     elemento.innerHTML = '<ul>'+
                  '<li> <a title="Favoritos" href="/favoritos"><i class="fa fa-heart-o" aria-hidden="true"></i> Favoritos</a> </li>'+
                  '<li> <a title="Cerrar sesión" href="/auth/salir"><i class="fa fa-sign-out" aria-hidden="true"></i> Cerrar sesión</a> </li>'+
                '</ul>';




}

/* FIN OPCIONES DEL USUARIO (la lista drop)*/

/* VALIDACION DE SESION DE USUARIO */

function getSessionStatus(funti){
xmlhttp_session=new XMLHttpRequest();
xmlhttp_session.onreadystatechange=function(){
if(xmlhttp_session.readyState==4){
if(xmlhttp_session.status>=200&&xmlhttp_session.status<300){

//recibir valores
apiResponse=JSON.parse(xmlhttp_session.responseText);

SESSION_VALID = apiResponse.result.session_is_valid;

//ejecutar la funcion pasada
if(SESSION_VALID){
funti();
}


  }}}


  xmlhttp_session.open("GET","/api/auth", true);
  xmlhttp_session.send();
}
/* FIN VALIDACION DE SESION DE USUARIO */



/* ACTIVAR EVENTOS DE LA PAGINA DE EMISION INDEX */
function showSimulcasts(id, btn_id){
  // >> id del boton tambien se puede usar como id del dia


  //mostrar tab
  document.getElementById(id).classList.toggle('false');

  //activar boton clickeado
   document.getElementById('simulcasts-bt' + btn_id).classList.toggle('active');

   tab_status  = document.getElementById(id).classList.contains('false');

                 //REALIZAR BUSQUEDA

                   //realizar la busqueda
                   if(tab_status == false){
                   xmlhttp=new XMLHttpRequest();
                   xmlhttp.onreadystatechange=function(){
                   if(xmlhttp.readyState==4){
                   if(xmlhttp.status>=200&&xmlhttp.status<300){

                   //recibir valores
                   apiResponse=JSON.parse(xmlhttp.responseText);

                   //asignar destino
                   content = document.getElementById(id);

                   content.innerHTML="";

                         for(i=0;apiResponse.result.items[i];i++){
                            content.innerHTML+='<li> <a href="/'+ apiResponse.result.items[i].slug +'/" title="'+ apiResponse.result.items[i].title +'"> <img src="//media.animemovil.com/animes/'+ apiResponse.result.items[i].id +'/wallpaper_small.jpg"> <span>'+ apiResponse.result.items[i].title +'</span> </a> </li>';
                         }

                         if(apiResponse.result.count==0){
                           content.innerHTML='<div class="error"><span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Sin resultados</span></div>';
                         }


                   }}}


                   xmlhttp.open("GET","/api/buscador?limit=30&estado=1&dia=" + btn_id , true);
                   xmlhttp.send();

                   }
                   //FIN buscador

}


/* FIN ACTIVAR EVENTOS DE LA PAGINA DE EMISION INDEX */





//Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-44188359-3', 'auto');ga('send', 'pageview');

//FIN analytics



//functiones necesarias
functions_requerid();
