import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import photo1 from "../../assets/photo1.jpg"
import photo2 from "../../assets/photo2.jpg"
import photo3 from "../../assets/photo3.jpg"
import photo4 from "../../assets/photo4.jpg"

function Home(){
    return(
      <div className="min-h-screen flex flex-col justify-between px-4 md:px-0">
      <Navbar />
      Himachal Trips
      <br/>
      <div className="flex justify-center items-center gap-4 max-w-screen-xl mx-auto">
        <Card photo={photo1} />
        <Card photo={photo2} />
        <Card photo={photo1} />
        <Card photo={photo2} />
      </div>
      Weekend Trips
      <br/>
      <div className="flex justify-center items-center gap-4 max-w-screen-xl mx-auto">
        <Card photo={photo3} />
        <Card photo={photo4} />
        <Card photo={photo1} />
        <Card photo={photo2} />
      </div>
      <Footer />
    </div>
    
    )
}
export default Home;