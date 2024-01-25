import { useState } from 'react'
import InputField from './components/InputField'
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
    }
    setTodo('')
  }

  return (
  <div>
    <h1>Taskify</h1>
    <InputField 
      todo={todo} 
      setTodo={setTodo} 
      handleAdd={handleAdd}
    />
  </div>
  )
}

export default App
