// import {io} from 'socket.io-client';

// export const initSocket = async () =>{
//     const options ={
//         'force new connection': true,
//         reconnectionAttempt: 'Infinity',
//         timeout:10000,
//         transports: ['websocket'],
//     };
//    return io('http://localhost:5000')    

// }
 
import { io } from 'socket.io-client';

export const initSocket = async () => {
    try {
        const options = {
            'force new connection': true,
            reconnectionAttempt: 'Infinity',
            timeout: 10000,
            transports: ['websocket'],
        };
        const socket = io('https://online-backend-production.up.railway.app', options);
        return socket;
    } catch (error) {
        console.error('Socket initialization error:', error);
        throw error;
    }
};

