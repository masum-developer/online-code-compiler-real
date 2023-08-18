import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';


const Home = () => {
    const [roomId,setRoomId] = useState('');
    const [username,setUsername] = useState('');
    const navigate = useNavigate();
    const createNewRoom = (e) =>{
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        console.log(id);
        toast.success('Created a new Room');
    }
    const joinRoom = () => {
        if(!roomId || !username){
            toast.error('Room Id and User Name is required');
            return;
        }
        navigate(`/editor/${roomId}`,{
            state:{
                username,
            },
        })
    }

    const handleInputEnter = (event)=>{
        if(event.code ==='Enter'){
            joinRoom();
        }
    }

    return (
        <div className="bg-slate-700 min-h-screen p-10">
        <div className="w-1/3 mx-auto pl-7 py-5 mt-20 bg-slate-900 text-white">
        <h4>Paste Invitation room id</h4>
        <div className="text-right">
            <input className="my-3 w-[90%] block text-black px-2" type="text" placeholder="Room Id" value={roomId} onChange={(e)=>setRoomId(e.target.value)} onKeyUp={handleInputEnter} />
            <input className="my-3 w-[90%] block text-black px-2" type="text" placeholder="User Name" value={username} onChange={(e)=>setUsername(e.target.value)} onKeyUp={handleInputEnter} />
            
            <button onClick={joinRoom} className="btn btn-sm btn-success mr-8">Join</button>
            
            
        </div>
        <span>If you do not have an Invite then create &nbsp; <Link onClick={createNewRoom} className="text-success hover:text-info cursor-pointer" to="">new Room</Link></span>
        </div>
        </div>
//         <div>
//             <div className="w-full h-20 md:h-10 bg-slate-800">
//                     <h2 className="text-xl md:text-3xl text-white text-center">Online Code Compiler and Real Time Editor</h2>
//             </div>
//             <div className="text-center my-5">
//                 <label htmlFor="language">Select Language</label>
//                 <select name="language" id="language">
//                     <option value="cpp">C++</option>
//                     <option value="phy">Python</option>
//                 </select>
//             </div>
//             <div className="text-center">
//                 <textarea className="border-2 p-10" name="" id="" cols="100" rows="8" placeholder="Write code"></textarea>
                
//             </div>
//             <div className="text-center">
//             <button className="btn bg-slate-900 my-3 text-white hover:bg-slate-600">Submit</button>
//             </div>
// <h4 className="ml-10">Output</h4>
//             <div className="text-center">
//                 <textarea className="border-2 p-10" name="" id="" cols="100" rows="1"></textarea>
                
//             </div>
            
//         </div>
    );
};

export default Home;