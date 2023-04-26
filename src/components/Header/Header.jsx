import React from "react";
import './Header'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://www.svgrepo.com/show/354264/react-styleguidist.svg" />
    </header>
  );
};

export default Header;
