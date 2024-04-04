import { Link } from "react-router-dom";

function Login() {
 

  return (
    <div className="h-[100vh] w-[100vw] flex  items-center justify-center ">
      <div className=" p-[20px] border border-blue-100 hover:border-blue-400   rounded-[10px] ">
        
        
        <div className="flex flex-col gap-[10px]  w-[100%]">

          <h2 className="flex justify-center font-bold">Login Form</h2>

          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            
            className="border border-brown-300 rounded-[5px] required"
          />
        
       
          {" "}
          <label htmlFor="Email">Email</label>
          <input
            type="Email"
            name="Email"
            className="border border-brown-300 rounded-[5px] required"
          />
       
          <label htmlFor="Enter-Password">Enter-Password</label>
          <input
            type="password"
            name="Enter-Password"
            className="border border-brown-300 rounded-[5px] required"
          />
       
       
        
          <button className=" border border-brown rounded-[5px] text-white bg-[#0055E9]">
            Log In
          </button>
           
          <div className=" flex flex-col items-center">
          <p >Have no account ..?</p>
            <Link to='/' className="text-[#0055E9] font-medium">Sign Up</Link>
          </div>
            
          </div>
        
      </div>
    </div>
  );
}

export default Login;
