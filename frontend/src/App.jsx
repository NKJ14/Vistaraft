import './App.css'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Card from './component/Card/Card'
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import photo4 from './assets/photo4.jpg'
function App() {

  return (
    <div class="w-full">
      <Navbar/>
      <div className="flex justify-center items-center gap-4">
        <Card photo={photo1} />
        <Card photo={photo2} />
      </div>
      <div className="flex justify-center items-center gap-4">
        <Card photo={photo3} />
        <Card photo={photo4} />
      </div>
      <Footer/>
    </div>
  )
}

export default App
