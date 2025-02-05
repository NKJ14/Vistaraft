import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import photo5 from "../../assets/photo5.jpg"
import photo6 from "../../assets/photo6.jpg"
import photo7 from "../../assets/photo7.jpg"
import photo8 from "../../assets/photo8.jpg"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function January(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div class="flex gap-5">
                <Card photo={photo5}/>
                <Card photo={photo6}/>
                <Card photo={photo7}/>
                <Card photo={photo8}/>
            </div>
            <div class="flex gap-5">
                <Card photo={photo5}/>
                <Card photo={photo6}/>
                <Card photo={photo7}/>
                <Card photo={photo8}/>
            </div>
            <Footer/>
        </div>
    );
};

export default January;