
import { useEffect, useRef, useState } from "react";
import Client from "../../components/Client/Client";
import Editor from "../../components/Editor/Editor";
import { initSocket } from "../../socket";
import ACTIONS from "../../../Actions";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const EditorPage = () => {
    const socketRef = useRef(null);
   const location = useLocation();
   const {roomId} = useParams()
   const reactNavigator = useNavigate();
   const [clients,setClients] = useState([])
    useEffect(()=>{
        const init = async () =>{
            socketRef.current = await initSocket();
            socketRef.current.on('connect_error',(err)=>handleErrors(err));
            socketRef.current.on('connect_failed',(err)=>handleErrors(err));
            function handleErrors(e){
                console.log('socket error', e);
                toast.error('Socket connection failed, try again later');
                reactNavigator('/');
            }
            socketRef.current.emit(ACTIONS.JOIN,{
                roomId,
                username:location.state?.username,
            });
            // Listening for joined event

            socketRef.current.on(ACTIONS.JOINED,({clients,username,socketId})=>{
                if(username !== location.state?.username){
                    toast.success(`${username} joined joined the room`)
                    console.log(`${username} joined`)
                }
                setClients(clients)
            })
        }

        init();
    },[])
    
    if(!location.state)
    {
       return <Navigate to='/' />
    }
    
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-[100%] bg-slate-800 min-h-screen md:w-[25%]">
            <div className="px-5">
            <div className="h-96">
                
                <h2 className="text-white">Hexa Coders707.3 </h2>
                <hr className="w-full" />
                <h4 className="text-error my-5">Connected</h4>
                
                <div>
                    {
                    clients.map(client=><Client key={client.socketId} username={client.username}></Client>)
                    }
                </div>
                
            </div>
            <div>
            <button className="btn btn-success">Copy Room Id</button>
            </div>
            <div>
            <button className="btn btn-success mt-3">Leave</button>  
            </div>
            
        </div>
            </div>
            <div className="min-h-screen w-[100%] md:w-[75%]">
                <Editor></Editor>
            </div>

        </div>
    );
};

export default EditorPage;