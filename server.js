app.use(express.static('public')

import React from "react";
function form1(props) {
    return (
      <div>
        <p>Name: <input name="name" /></p>
        <p>email: <input name="email" /></p>
        <p>pass: <input name="pass" /></p>
        {/*i have to chick the pass*/}
      </div>
    );
  }
  
  export default form1;

// 
import React from "react";

function form2 (props) {
  return (
    <div>
      <p>line1: <input name="line1" /></p>
      <p>line2: <input name="line2" /></p>
      <p>city: <input name="city" /></p>
      <p>state: <input name="state" /></p>
      <p>zip code: <input name="zip code" /></p>

    </div>
  );
}

export default form2 ;
