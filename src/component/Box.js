import React from 'react'
import rock from "../images/rock.svg";
import scissors from "../images/scissors.svg";
import paper from "../images/paper.svg";

const Box = (props) => {
  let result;
  if(
    props.title === "Computer" && 
     props.result !== "tie" &&
    props.result !== "" 
   ){
     result = props.result === "win" ? "lose" : "win"; 
    }else { result = props.result;
    }
  if (props.title === "Computer"){
    console.log("computer", result);
  }  
  // console.log("props", props);
  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        {/* <h2 data-testid="item-name">{props.item && props.item.name}</h2> */}
        <img className="item_img" src={props.item?.img || scissors} alt={props.item?.name} style={{ width: "200px", height: "200px" }}></img>
        <h2>{result}</h2>
    </div>
  )
}

export default Box