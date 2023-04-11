import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>My Todos</h1>
        <Todo text="Learning Reactjs"></Todo>
        <Todo text="Learning Nodejs"></Todo>
    </div>
  );
}

export default App;
