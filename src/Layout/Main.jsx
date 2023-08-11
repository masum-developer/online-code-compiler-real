import { Outlet } from "react-router-dom";
import LeftSideBar from "../pages/LeftSideBar/LeftSideBar";


const Main = () => {
    return (
        <div className="flex">
            <div className=" bg-slate-800 min-h-screen w-[25%]"><LeftSideBar></LeftSideBar></div>
            <div className="min-h-screen w-[75%]">
                <Outlet></Outlet>
            </div>

        </div>
    );
};


export default Main;