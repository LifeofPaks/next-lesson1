import Link from "next/link";
import React from "react";
import "./Navbar.scss";
import Image from "next/image";
import DisplayToggle from "../Displaytoggle/DisplayToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 6,
    title: "folio",
    url: "/folio",
  },


  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },

  {
    id: 3,
    title: "About",
    url: "/about",
  },

  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },

  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <nav>
      <Link href="/" className="logo">
        <Image width={30} height={30}  src="/logo.png"
          alt="logo"/>
        <h1>Paks</h1>
      </Link>
      <div className="links">
        {links.map((link) => (
          <Link className="link" key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

      <DisplayToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
