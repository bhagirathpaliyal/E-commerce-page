import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import H_section0 from "./H_section0";
import H_section1 from "./H_section1";
import H_section2 from "./H_section2";
import H_section3 from "./H_section3";
import H_section4 from "./H_section4";
import H_section5 from "./H_section5";

function Home(){

    return(
        <div >
        <Header/>
        <H_section0/>
        <H_section1/>
        <H_section2/>
        <H_section3/>
        <H_section4/>
        <H_section5/>
        <Footer/>
        </div>
    )
}

export default Home;