(function() {
    "use strict";
    var regalo = document.getElementById ('regalo')
    document.addEventListener('DOMContentLoaded' , function (){

        /*

        var map = L.map('mapa').setView([3.467456, -76.516584], 18);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([3.467456, -76.516584]).addTo(map)
            .bindPopup('CERCA DE <br>CASA .')
            .openPopup();

*/


    // MAPA
    if (document.getElementById('mapa') && typeof L !== 'undefined') {

        var map = L.map('mapa').setView([3.467456, -76.516584], 18);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([3.467456, -76.516584]).addTo(map)
            .bindPopup('CERCA DE <br> CASA.')
            .openPopup();
    }
        //campos datos usuarios

        var nombre = document.getElementById('nombre')
        var apellido = document.getElementById('apellido')
        var email = document.getElementById('email')

        //campos pases

        var pase_dia = document.getElementById('pase_dia')
        var pase_dosdias = document.getElementById('pase_dosdias')
        var pase_completo = document.getElementById('pase_completo')


        //botones y div

        var calcular = document.getElementById('calcular')
        var errorDiv = document.getElementById('error')
        var botonRegistro = document.getElementById('btnRegistro')
        var lista_productos = document.getElementById('lista-productos')
        var suma = document.getElementById('suma-total')



        //extras
        var camisas = document.getElementById('camisa_evento')
        var etiquetas = document.getElementById('etiquetas')


        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('input', mostrarDias);
        pase_dosdias.addEventListener('input', mostrarDias);
        pase_completo.addEventListener('input', mostrarDias);

        nombre.addEventListener('blur', validarCampos)
        apellido.addEventListener('blur', validarCampos)
        email.addEventListener('blur', validarCampos)
        email.addEventListener('blur', validarMail)


        function validarCampos() {
            if (this.value == '') {
                errorDiv.style.display ='block'
                errorDiv.innerHTML ="este campo es obligatorio"
                this.style.border = '1px solid red'
                errorDiv.style.border = '1px solid red'
            }else {
                errorDiv.style.display = 'none'
                this.style.border = '1px solid #cccccc'
            }
        }

        function validarMail() {
            if (this.value.indexOf("@") >-1) {
                errorDiv.style.display = 'none'
                this.style.border = '1px solid #cccccc'
            }else{
                errorDiv.style.display ='block'
                errorDiv.innerHTML ="correo invalido"
                this.style.border = '1px solid red'
                errorDiv.style.border = '1px solid red'
            }
        }






        function calcularMontos(event){
            event.preventDefault();
            if (regalo.value == '') {
                alert("Debes elegir un regalo")
                regalo.focus()
            }else{
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0

            var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto*50) + ((cantCamisas*10) * .93) + (cantEtiquetas*2)

            var listadoProductos = []

            if (boletosDia >= 1 ) {
                listadoProductos.push(boletosDia + ' pases por dia')
            }

            if (boletos2Dias >= 1) {
                listadoProductos.push(boletos2Dias + ' pases por 2 dias')
            }

            if (boletoCompleto >= 1) {
                listadoProductos.push(boletoCompleto + ' pases completos')
            }

            if (cantCamisas >= 1) {
                listadoProductos.push(cantCamisas + ' camisas')
            }

            if (cantEtiquetas >= 1) {
                listadoProductos.push(cantEtiquetas + ' etiquetas')
            }


            lista_productos.style.display="block"
            lista_productos.innerHTML = ''

            for (var i = 0; i < listadoProductos.length; i++) {
                lista_productos.innerHTML +=listadoProductos[i] + '<br/>'

            }
            suma.innerHTML = "$ " + totalPagar.toFixed(2)


            }
        }


        function mostrarDias() {
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0

                var diasElegidos = []

                // Reiniciar los días
                document.getElementById('viernes').style.display = 'none';
                document.getElementById('sabado').style.display = 'none';
                document.getElementById('domingo').style.display = 'none';

                if (boletosDia>0) {
                    diasElegidos.push('viernes')
                    console.log(diasElegidos)
                }
                if (boletos2Dias>0) {
                    diasElegidos.push('viernes','sabado')
                    console.log(diasElegidos)
                }
                if (boletoCompleto>0) {
                    diasElegidos.push('viernes','sabado','domingo')
                    console.log(diasElegidos)
                }


                for (var i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display='block';
                }

        }

    });
})();



$(function () {


    //letterin

    $('.nombre-sitio').lettering()


    // programas de conferencias
    $('.programa-evento .info-curso:first').show()
    $('.menu-programa a:first').addClass('activo')


    $('.menu-programa a').on('click', function () {
        $('.menu-programa a').removeClass('activo')
        $(this).addClass('activo')
        $('.ocultar').hide()

        var enlace = $(this).attr('href')
        $(enlace).fadeIn(1000)

        return false
    })


    //animaciones para los numeros


    $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200)
    $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200)
    $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1500)
    $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500)


    //cuenta regresiva


    $('.cuenta-regresiva').countdown('2026/12/10 09:00:00', function (event) {
        $('#dias').html(event.strftime('%D'))
        $('#horas').html(event.strftime('%H'))
        $('#minutos').html(event.strftime('%M'))
        $('#segundos').html(event.strftime('%S'))
    })

})