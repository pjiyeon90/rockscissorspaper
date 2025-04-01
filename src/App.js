import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Box from './component/Box'
import rockImg from "./images/rock.svg"; // 이미지 import
import scissorsImg from "./images/scissors.svg";
import paperImg from "./images/paper.svg"; 
// 1. 박스 2개만들기 (컴퓨터, user) 사진, 멘트(결과)
// 2. 가위 바위 보 버튼 만들기
// 3. 유저가 버튼 클릭시 유저 박스에 선택한 값이 보이게
// 4. 컴퓨터는 랜덤으로 가위, 바위, 보 출력
// 5. 유저와 컴퓨터의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색 바뀌고 컴퓨터 멘트 바뀐다. (승-초록, 패-빨강, 무승부-검정)

const choice = {
  rock:{
   name: "rock",
   img: rockImg
  }, 
  scissors:{
    name: "scissors",
    img: scissorsImg
  },
  paper:{
    name: "paper",
    img: paperImg
  }
};


function App() {
  const [userSelect, setUserSelect] = useState(null)

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    // console.log("선택됨!", userChoice);
  }
  return (
    <div>
    <div className='main'>
      <Box title="You" item={userSelect}/>
      {/* <Box title="Computer"/> */}
    </div>
    <div className='main'>
      <button onClick={()=> play("scissors")}>가위</button>
      <button onClick={()=> play("rock")}>바위</button>
      <button onClick={()=> play("paper")}>보</button>
    </div>
    </div>
  );
}

export default App;
