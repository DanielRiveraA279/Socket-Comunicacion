

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id)
    });

    //escuchamos el mensaje del cliente, poniendo el nombre de la emision como primer parametro
    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 123456;
        //ejecutamos el callback mandandole el id para solo un cliente
        callback(id);

        //enviar mensaje a todos los clientes conectados
        socket.broadcast.emit('enviar-mensaje', payload)
    })
}

module.exports = {
    socketController
}