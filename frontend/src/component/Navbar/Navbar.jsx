import './navbar.css';
import vistaLogo from '../Navbar/vista_logo.jpg';
function Navbar() {
  return (
    <div className="w-full h-16 flex items-center justify-between sticky top-0 left-0 right-0 z-0 bg-black p-4">
      {/* Logo */}
      <nav class="bg-gray-800 p-4">
  <div class=" container mx-auto flex items-center justify-start">
    <a href="#">
      <img 
        src={vistaLogo} 
        alt="Logo" 
        class="max-w-[8rem] w-auto h-auto max-h-[8rem] transition-transform duration-300 hover:scale-110 object-contain flex-shrink-0" 
      />
    </a>
  </div>
</nav>



      {/* Phone Number Section */}
      <p className="text-white text-lg flex-grow text-center">
        +91 8384076491
      </p>

      {/* Menu Buttons */}
      <div className="hidden lg:flex space-x-6">
        <button className="text-black bg-transparent hover:text-blue-500">FEBRUARY</button>
        <button className="text-black bg-transparent hover:text-blue-500">MARCH</button>
        <button className="text-black bg-transparent hover:text-blue-500">CONTACT US</button>
        <button className="text-black bg-transparent hover:text-blue-500">ABOUT US</button>
      </div>

      {/* Menu Toggle Button for Mobile */}
    </div>
  );
}

export default Navbar;