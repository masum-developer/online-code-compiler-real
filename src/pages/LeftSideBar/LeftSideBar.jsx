

const LeftSideBar = () => {
    return (
        <div className="pl-5">
            <div className="h-96">
                <img title="Masum Billah" className="p-5 w-20 h-20 rounded-full" src="profileImge.jpg" alt="" />
                <h2 className="text-white">Masum Billah</h2>
                <img title="Masum Billah" className="p-5 w-20 h-20 rounded-full" src="male.png" alt="" />
                <h2 className="text-white">John Doe</h2>
                <img title="Masum Billah" className="p-5 w-20 h-20 rounded-full" src="female.png" alt="" />
                <h2 className="text-white">Emy Jackson</h2>
                
                
            </div>
            <button className="btn btn-success">Leave</button>
        </div>
    );
};

export default LeftSideBar;