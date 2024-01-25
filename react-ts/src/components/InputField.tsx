import React from 'react'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className='input' onSubmit={(e) => handleAdd(e)}>
        <input type="text" placeholder='enter text' 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit'>Go</button>
    </form>
  )
}

export default InputField