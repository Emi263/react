import React, { useState } from 'react'

function Collapsible() {

  const [show, setShow] = useState(false);

  function toggle() {
    if(show === true) {
      setShow(false);
    }
    else {
      setShow(true);
    }
  }

  return (
    <div>
      <h1>Content</h1>
      <button onClick={toggle}>Toggle show</button>
      {show && <p>
        Lorem ipsum dolor sit 
        amet consectetur adipisicing elit. 
        Tenetur debitis vero nulla rerum culpa, 
        distinctio ad quas porro excepturi reiciendis 
        ratione est vel labore accusantium dolorum 
        fugiat 
        reprehenderit itaque? Assumenda dignissimos 
        rem at qui! 
        Dolores dolorem quis eos commodi cum debitis 
        distinctio cupiditate, 
        saepe soluta porro quas fugit est beatae.
      </p>}
    </div>
  )
}

export default Collapsible