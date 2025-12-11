import "./App.css";
import Navbar from "./Navbar/Navbar";


function App() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto p-2">
        <Navbar></Navbar>
      </div>

      <div className="max-w-[1200px] mx-auto flex justify-around gap-5">
        {/* in progress btn */}
        <div
          className="card bg-base-100 w-full shadow-sm ">
          <div className="card-body flex items-center justify-center progress ">
            <h2 className="card-title">In Progress</h2>
            <h1 className="card-title">0</h1>
          </div>
        </div>
        {/* resolve btn */}
        <div className="card bg-base-100 w-full shadow-sm resolve">
          <div className="card-body flex items-center justify-center">
            <h2 className="card-title">Resolve</h2>
            <h1 className="card-title">0</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
