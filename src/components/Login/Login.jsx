function Login() {
  const nameChange = () => {
    const name = ["bp", "sohan", "jagsa"];
    const int = Math.floor(Math.random() * 3);

    return name[int];
  };

  return (
    <div className="h-[100vh] w-[100vw] flex  items-center justify-center ">
      <div className="max-[300px] border border-brown flex flex-col items-center gap-[10px] p-[5px] rounded-[10px] ">
        <h2>Login</h2>
        <p>hello {nameChange()}!</p>
        <div className="flex flex-col">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            className="border border-brown-300 rounded-[5px] required"
          />
        </div>
        <div className="flex flex-col ">
          {" "}
          <label htmlFor="Email">Email</label>
          <input
            type="Email"
            name="Email"
            className="border border-brown-300 rounded-[5px] required"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Enter-Password">Enter-Password</label>
          <input
            type="password"
            name="Enter-Password"
            className="border border-brown-300 rounded-[5px] required"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Re-Enter-Password">Re-Enter-Password</label>
          <input
            type="password"
            className="border border-brown-300 rounded-[5px]"
          />
        </div>
        <div>
          <button className="w-full border border-brown rounded-[5px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
