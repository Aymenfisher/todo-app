import React, {useState} from 'react';
import './App.css';
import { Background } from './components/Background.js';
import { TodoContainer } from './features/Todo/TodoContainer';

function App() {
  const [theme,setTheme] = useState('dark');

  return (
    <div className={`App ${theme}`}>
      <Background theme={theme}/>
      <main className='todo-app'>
        <TodoContainer theme={theme} setTheme = {setTheme} />
      </main>
    </div>
  );
}

export default App;
