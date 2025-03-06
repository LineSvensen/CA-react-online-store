import { Link } from "react-router-dom";
import { CartIconButton } from "./buttons/CartIconButton";
import logo from "../assets/shop-drop-logo.png";
import styles from "./CSS/buttonStyles.module.css";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 max-w-6xl w-full mx-auto text-lg">
      <Link
        to="/"
        onClick={() => {
          setFilteredProducts([]);
          setSearchTriggered(false);
        }}
      >
        <img src={logo} alt="Store Logo" className="h-15 cursor-pointer" />
      </Link>

      <nav className="flex gap-4 text-blue-600">
        <Link to="/contact" className={`${styles.links}`}>
          Contact
        </Link>
        <CartIconButton />
      </nav>
    </header>
  );
}
