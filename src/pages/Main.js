import React from "react";



function Main() {
  const [content,setContent]=React.useState(1)
  
  function handleClickUp(){
    setContent(content +1)
  }
  
  function handleClickDown(){
    setContent(content -1)
  }

  return(
      <div>
        <button onClick={handleClickDown}>내려줘</button>
        <div>{content}</div>
        <button onClick={handleClickUp}>올려줘</button>
      </div>)
}

export default Main;