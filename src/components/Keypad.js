
import React from "react";

// Code Keypad Component Here

function Keypad() {
   function handleChange() {
     console.log("Entering password...");
   }

   return <input type="password" onChange={handleChange} />;
   
}
 console.log("entering password..");
export default Keypad;