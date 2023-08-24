import React from 'react';
import { Todo } from '../App';
import SingleTodo from './SingleTodo';

type TodoListProps = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList:React.FC<TodoListProps> = ({todos, setTodos}) => {
    
    return <ul>
        {todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))}
    </ul>
}
export default TodoList;