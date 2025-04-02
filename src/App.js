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
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult]=useState(""); //승패의 값
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };


  //컴퓨터 랜덤
  const randomChoice=()=>{
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이(배열)로 만들어주는 함수 | let itemArray = ["rock", "scissors", "paper"];
    console.log("item array", itemArray);
    //Math.random은 0이상 1미만의 랜덤한 소수 생성, itemArray.length 3으로 0이상 3미만 랜덤 숫자 생성
    let randomItem = Math.floor(Math.random()* itemArray.length) ; //아이템 어레이의 자리값? 만큼 랜덤으로 돌리고 소수점은 버리고 정수로 나오게
    //itemArray가 rock, scissors, paper이니까 0이면 rock, 1이면 scissors로 선택됨
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };



  //상대와 가위, 바위, 보 해서 이길 가능성, 질 가능성 다 생각해보기
  const judgement = (user, computer) =>{
    console.log("user", user, "computer", computer);


  // 주먹  빠  | 패
  // 주먹  찌  | 승
  // 주먹 주먹 | 무
  // 찌   빠  | 승
  // 찌  찌   | 무
  // 찌  주먹 | 패
  // 빠  빠   | 무
  // 빠  찌   | 패
  // 빠  주먹  | 승

  if(user.name === computer.name){
    return "tie";
  }else if(user.name ==="rock")return computer.name === "scissors"? "win" : "lose";
   else if(user.name === "scissors")return computer.name === "paper"? "win" : "lose";
   else if(user.name === "paper")return computer.name === "rock"? "win" : "lose";
  };
  

  
  return (
    <div>
    <div className='main'>
      <Box title="You" item={userSelect} result={result}/>
      <Box title="Computer" item={computerSelect} result={result}/>
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
