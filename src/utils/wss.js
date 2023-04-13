import io from 'socket.io-client';

const SERVER = 'http://localhost:5002';

let socket = null;

export const connectWithSocketIOServer = () => {
    socket = io(SERVER)

    socket.on('connect',()=>{
        console.log('deu bom a conexao com socket')
        console.log(socket.id)
    })
}

export const createNewRoom = (identity) => {
    
    const data = {
        identity,
    }

    socket.emit('create-new-room',data)
}

export const joinRoom = (identity,roomId) => {
    
    const data = {
        roomId,
        identity,
    }

    socket.emit('join-room',data)
}