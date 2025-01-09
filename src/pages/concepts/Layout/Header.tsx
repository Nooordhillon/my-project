import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="w-full ml-0 mt-0">
      <div className="bg-[#f8e8de] w-full">
        <div className="fixed bg-[#f8e8de] w-full">
          <button className="text-6xl mt-6" aria-label="Close">⃠</button>
          <Link to="/" className="font-semibold hover:border-b-2 text-xl ml-96">
            Home
          </Link>
          <Link to="/about" className="font-semibold hover:border-b-2 text-xl ml-10">
            About
          </Link>
          <Link to="/features" className="font-semibold hover:border-b-2 text-xl ml-10">     
            Features
          </Link>
          <Link to="/portfolio" className="font-semibold hover:border-b-2 text-xl ml-10">
            Portfolio
          </Link>
          <Link to="/blog" className="font-semibold hover:border-b-2 text-xl ml-10">
            Blog
          </Link>
          <Link to="/contact" className="font-semibold hover:border-b-2 text-xl ml-10">
            Contact
          </Link>
          <a href="https://www.instagram.com" className="ml-60 hover:border-b-2">Instagram</a>
          <a href="https://www.behance.net" className="ml-4 hover:border-b-2">Behance</a>
          <a href="https://www.twitter.com" className="ml-4 hover:border-b-2">Twitter</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
