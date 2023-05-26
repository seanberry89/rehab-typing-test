import { Fragment } from 'react';
import '../../../style/typing.css';


const Cursor = ({ data, isBlink }) => {

  let ring = data.title === "The Lord of the Rings";
  let silmarils = data.title === "The Silmarillion";
  let mountains = data.title === "The Hobbit";
  let snowFlake = data.title === "A Christmas Carol";
  let wizard = data.title === "Harry Potter and the Goblet of Fire" || data.title === "Harry Potter and the Deathly Hollows";
  let drow = data.title === "Homeland";

  let blinking = isBlink ? "add-blink" : "";

  return (
    <Fragment>

      {ring && ( <span className={blinking} style={{ border: "1.5px solid #FBC841" }}></span> )}

      {silmarils && ( <span className={blinking} style={{ border: "1.5px solid #A8A9AD" }}></span> )}

      {mountains && ( <span className={blinking} style={{ border: "1.5px solid #136207" }}></span> )}

      {snowFlake && ( <span className={blinking} style={{ border: "1.5px solid #99C4CE" }}></span> )}

      {wizard && ( <span className={blinking} style={{ border: "1.5px solid #964E02" }}></span> )}

      {drow && ( <span className={blinking} style={{ border: "1.5px solid #967bb6" }}></span> )}

    </Fragment>
  )
}

export default Cursor;
