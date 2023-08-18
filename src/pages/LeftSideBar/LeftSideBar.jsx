

const LeftSideBar = () => {
    return (
        <div className="px-5">
            <div className="h-96">
                
                <h2 className="text-white">Hexa Coders707.3 </h2>
                <hr className="w-full" />
                <h4 className="text-error my-5">Connected</h4>
                
                
                
            </div>
            <div>
            <button className="btn btn-success">Copy Room Id</button>
            </div>
            <div>
            <button className="btn btn-success mt-3">Leave</button>  
            </div>
            
        </div>
    );
};

export default LeftSideBar;