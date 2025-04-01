import React from 'react'
import rock from "../images/rock.svg";
import scissors from "../images/scissors.svg";
import paper from "../images/paper.svg";

const Box = (props) => {
  console.log("props", props);
  return (
    <div className='box'>
        <h1>{props.title}</h1>
        <img className="item_img" src={props.item?.img || scissors} alt={props.item?.name} style={{ width: "200px", height: "200px" }}></img>
        <h2>이겼습니다.</h2>




    </div>
  )
}

export default Box