import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.active : styles.link
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? styles.active : styles.link
        }
      >
        Shop
      </NavLink>

      <NavLink
        to="/admin"
        className={({ isActive }) =>
          isActive ? styles.active : styles.link
        }
      >
        Admin
      </NavLink>

      <NavLink
        to="/add"
        className={({ isActive }) =>
          isActive ? styles.active : styles.link
        }
      >
        Add Product
      </NavLink>
    </nav>
  );
}