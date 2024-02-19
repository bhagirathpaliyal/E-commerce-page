import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import H_section0 from "../Home/H_section0";
import Item from "./Item";

function Men(){

    return(
        <div className="bg-[#F1F1F1] flex flex-col gap-[50px]">
           
           <H_section0/>
          <div className="flex  justify-evenly">
            <Item/>
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

export default Men;