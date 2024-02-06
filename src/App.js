
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoTextField from './components/ToDoTextField';
import { useState } from 'react';

function App() {
const [listToDo, setListTodo]= useState([]);
let addList=(inputText)=>{
  setListTodo([...listToDo,inputText]);
}

const deleteListItem = (key)=>{
  let newListTodo = [...listToDo];
  newListTodo.splice(key,1)
  setListTodo([...newListTodo])
}

  return (
    <div className="main-container">
      <div className="center-container">

      <h1 className="app-heading">Get Your Work Done</h1>

        <ToDoTextField addList={addList}/>
        <hr/>
       <div className="listContainer">
       {listToDo.map((listItem,i)=>{
          return (
            <ToDoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
       </div>
      
      </div>
    </div>

     
     
    
  );
}

export default App;
