import { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";

function ClickOutside(){

const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

    return (


        <div>
      <button style={styles.buttonDiv} onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen && (
        <div ref={dropdownRef} style={styles.dropdown}>
          <p>Dropdown Content</p>
        </div>
      )}
    </div>

    )
}


 
const styles = {
    dropdown: {
    color: "blue",
    backgroundColor: "pink",
    position: "absolute",
    top: "40px",
    left: "0px",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "4px",
  },
   buttonDiv : {
    padding: "10px 20px",
    marginTop: "20px",
    color: "red",
    backgroundColor: "yellow",
    borderRadius: "7%",
}
}

export default ClickOutside