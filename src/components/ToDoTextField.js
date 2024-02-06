import React,{useState} from 'react';

export default function ToDoTextField(props) {

  const[inputText ,setInputText]=useState('');
  return (
    <div className='inputContainer'>
      <input type="text"
       className='Input-box'
       value={inputText}
       placeholder='Add Task'
       onChange={e=>{
        setInputText(e.target.value)
       }}
       />

    <button className='Addbtn'
     onClick={()=>{
      if(inputText!==''){
        props.addList(inputText)
        setInputText("")
      }
     
     }}
    >+</button>
       
    </div>
  )
}

