var num;
var interval = null;
$(document).ready (function() {
    'use strict';

    var bg_h = $('#escena').height();
    var bg_w = $('#escena').width();

    //Posicion Inicial de MarioBros
    $("#mario").css("top", (bg_h - 105) + "px");
    $("#mario").css("left", (bg_w / 4) + "px");

    $(document).keydown (function(e) {

    //ASIGNACION DE TECLAS
    //https://www.yoelprogramador.com/teclas-del-teclado-y-valores-de-codigos-de-tecla/
    
        if (e.which == 38){
            var key = 1;
            mover(key);
        }

        if (e.which == 40){
            var key = 2;
            mover(key);
        }

        if (e.which == 39){
            var key = 3;
            mover(key);
        }

        if (e.which == 37){
            var key = 4;
            mover(key);
        }

        if (e.which == 96){
            var key = 5;
            mover(key);
        }
    });

    function mover(key){
        clearInterval(interval);
        if (key == 1){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/back-' + num + '.png'); //arriba

                var position = $("#mario").position();
                $("#mario").css("top", (position.top - 10) + "px");

                num += 1;
                if (num === 5){
                    num = 1;
                }
            }, 150);

        } else if (key == 2){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/front-' + num + '.png'); //abajo

                var position = $("#mario").position();
                $("#mario").css("top", (position.top + 10) + "px");

                num += 1;
                if (num === 5){
                    num = 1;
                }
            }, 150);

        } else if (key == 3){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/right-' + num + '.png'); //derecha

                var position = $("#mario").position();
                $("#mario").css("left", (position.left + 10) + "px");

                num += 1;
                if (num === 5){
                    num = 1;
                }
            }, 150);

        } else if (key == 4){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/left-' + num + '.png'); //izquierda

                var position = $("#mario").position();
                $("#mario").css("left", (position.left - 10) + "px");

                num += 1;
                if (num === 5){
                    num = 1;
                }
            }, 150);

        } else if (key == 5){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/idle-' + num + '.png'); //detenido

                var position = $("#mario").position();
                $("#mario").css("left", (position.left) + "px");

                num += 1;
                if (num === 5){
                    num = 1;
                }
            }, 150);

        };
    };
});