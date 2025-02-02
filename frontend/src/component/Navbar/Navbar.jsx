import './Navbar.css';

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between sticky top-0 left-0 right-0 z-0 bg-gray-800 p-4">
      {/* Logo */}
      <button className="text-black text-lg">
        Logo
      </button>

      {/* Phone Number Section */}
      <p className="text-white text-lg flex-grow">
        +91 1234567890
      </p>

      {/* Menu Buttons */}
      <div className="hidden lg:flex space-x-6">
        <button className="text-black hover:text-yellow-500">JANUARY</button>
        <button className="text-black hover:text-yellow-500">FEBRUARY</button>
        <button className="text-black hover:text-yellow-500">CONTACT US</button>
        <button className="text-black hover:text-yellow-500">ABOUT US</button>
      </div>

      {/* Menu Toggle Button for Mobile */}
    </div>
  );
}

export default Navbar;
