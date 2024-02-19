

function Login(){

    const nameChange=()=>{

        const name=['bp','sohan','jagsa'];
        const int=Math.floor(Math.random()*3);

        return name[int];
    }


    return(
        <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center ">
            <h2>Login Form</h2>
            <p>
                hello {nameChange()}!
            </p>
        </div>
    )
}

export default Login;