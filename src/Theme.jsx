import React, { useState } from "react";

function Theme() {

  const [theme,setTheme] = useState("light");


  function changeTheme() {
    setTheme("dark");
  }

  const classname = theme === "light" ? "theme-light": 'theme-dark';

  return (
    <div className={classname}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing e lit. Aut obcaecati facilis assumenda in exercitationem
        maiores. Beatae corrupti enim ullam, itaque aspernatur iusto veritatis, cum similique, doloribus voluptate ad in
        vitae! Iusto labore, iure repellendus sit sapiente atque rerum aut magnam?
      </h1>



      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
}

export default Theme;
