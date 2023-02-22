import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navItems=links.map(item=>
    {
      return <a key={item} href={`#${item}`}>{item}</a>
    })
  return <nav>{navItems}</nav>;
}

export default NavBar;
