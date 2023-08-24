import React from 'react';

type InputFieldProps = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
};

const InputField:React.FC<InputFieldProps> = ({todo, setTodo, handleAdd}) => {
    
    return <form className='input-form' onSubmit={(e) => {
        handleAdd(e)}}>
        <input type="input" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter a task' className='input-box'/><br></br>
        <button className='button' type='submit'>Add Task</button>
        </form>
}
export default InputField;