import React from 'react';
import { Todo } from '../App';

type TodoListProps = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList:React.FC<TodoListProps> = ({todos, setTodos}) => {
    
    return <ul>
        {todos.map((todo) => (
            <li>{todo.todo}</li>
        ))}
    </ul>
}
export default TodoList;