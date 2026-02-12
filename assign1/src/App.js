import logo from './logo.svg';
import './App.css';
import Counter from './ques2/Counter';
import Counter1 from './ques-1/Counter1';
import "./ques2/counter.css"
import Parent from './ques-3/Parent';
import Todo from "./ques-4/Todo.jsx";
import Login from './ques-5/Login.jsx';
function App() {
  return (
    <div className='counter-wrapper'>
      {/* <Todo/> */}
      <Login/>
    </div>
  );
}

export default App;
