//Referencia del HTML
const lblOnline = document.querySelector('#lblOnline'); //seleccionamos un elemento html, por id
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {

    lblOffline.style.display = 'none'; //desaparece
    lblOnline.style.display = ''; //aparece
});

socket.on('disconnect', () => {

    lblOnline.style.display = 'none'; //desaparece
    lblOffline.style.display = ''; //aparece
});

//escuchamos lo que se emitio por el identificador enviar-mensaje desde el server
socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
});

//escuchamos el evento click
btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value; //capturamos valor del input txtMensaje
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);
    }) //emitir informacion al servidor
})