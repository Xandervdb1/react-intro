import logo from './logo.svg';
import { InputField } from './components/InputField';
import { SubmitButton } from './components/SubmitButton';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className='appContainer'>
      <h1>My Todo App</h1>
      <form>
        <InputField />
        <SubmitButton />
      </form>
      <TodoList />
    </div>
  );
}

export default App;
