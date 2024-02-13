import logo from "./../../assets/logo.svg"

function Logo() {
    return(
        
        <div className="w-[50px] h-[50px] ml-[20px] border-[2px] border-solid border-black flex items-center">
     <img src={logo} alt="logo"/>
        </div>
    )
}

export default Logo;