import { Outlet } from "react-router-dom";
import LeftSideBar from "../pages/LeftSideBar/LeftSideBar";


const Main = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-[100%] bg-slate-800 min-h-screen md:w-[25%]"><LeftSideBar></LeftSideBar></div>
            <div className="min-h-screen w-[100%] md:w-[75%]">
                <Outlet></Outlet>
            </div>

        </div>
    );
};


export default Main;