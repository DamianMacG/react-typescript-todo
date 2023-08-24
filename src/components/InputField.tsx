import React from 'react';

type InputFieldProps = {
    
};

const InputField:React.FC<InputFieldProps> = () => {
    
    return <form className='input-form'>
        <input type="input" placeholder='Enter a task' className='input-box'/>
        <button className='button'>Add Task</button>
        </form>
}
export default InputField;