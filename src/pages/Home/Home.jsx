

const Home = () => {
    return (
        <div>
            <div className="w-full h-10 bg-slate-800">
                    <h2 className="text-3xl text-white text-center">Online Code Compiler and Real Time Editor</h2>
            </div>
            <div className="text-center my-5">
                <label htmlFor="language">Select Language</label>
                <select name="language" id="language">
                    <option value="cpp">C++</option>
                    <option value="phy">Python</option>
                </select>
            </div>
            <div className="text-center">
                <textarea className="border-2 p-10" name="" id="" cols="100" rows="8" placeholder="Write code"></textarea>
                
            </div>
            <div className="text-center">
            <button className="btn bg-slate-900 my-3 text-white">Submit</button>
            </div>
<h4 className="ml-10">Output</h4>
            <div className="text-center">
                <textarea className="border-2 p-10" name="" id="" cols="100" rows="1"></textarea>
                
            </div>
            
        </div>
    );
};

export default Home;