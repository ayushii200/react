import { useState } from 'react';
import './todo.css';

function createInitialTodos() {
  const initialTodos = [];

  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');
  const todo={theme:{
    backgroundColor:'black',
    color: 'white'
  }};

  const foobar = () => {
    if(text == '') {
        alert(" Please Enter Your name ...")
    }
    else if(text=="Priya"){
        alert('funny')
        setText('');
        setTodos([{
            id:todos.length,
            text:text

        },...todos]);
    }
    else if(text=="Priyal"){
        alert('leader')
        setText('');
        setTodos([{
            id:todos.length,
            text:text

        },...todos]);
    }
    else if(text=="Navneet"){
        alert('Helping')
        setText('');
        setTodos([{
            id:todos.length,
            text:text

        },...todos]);
    }
    else{
        setText('');
        setTodos([{
            id:todos.length,
            text:text

        },...todos]);
    }
  }

  return (
    <>
    <div style={todo.theme} className='space'><center>
    <h1>Todo List</h1></center>
      <input className='inpt' placeholder='Enter The Name'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="add" onClick={ foobar}> Add</button>
      </div>
      <ul className='otpt'>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
      
    </>
  );
}