import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/">
      <a>Home!</a>
    </Link>
  </div>
);

export default Nav;
