// useWindowSize
// Problem Statement: Create a useWindowSize hook that tracks the browser window’s dimensions. 
// The hook should update the width and height values dynamically when the window is resized.


import React from "react";
import useWindowSize from "./useWindowSize";

function SizeWindow(){

    const { width, height } = useWindowSize();

    return (
        <div>
      <h1>Window Size</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
    )

}

export default SizeWindow