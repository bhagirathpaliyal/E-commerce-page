import Footer from "../Footer/Footer";
import H_section0 from "../Home/H_section0";
import Item from "../Men/Item";

function Women(){
    return(
        <div className="bg-[#0055E9] flex flex-col gap-[50px]">
            <H_section0/>
            <div className="flex  justify-evenly ">
            <Item />
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            </div>
            <div className="flex  justify-evenly">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            </div>
           <Footer/>
        </div>
    )
}

export default Women;