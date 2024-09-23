import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';


function TodoList() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    };

    const updatetodo = (todoId,newValue)=>{
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const completeTodo =id=>{
       let updatedTodos= todos.map(todo=>{
        if(todo.id=== id){
            todo.isComplete = !todo.isComplete
        }
        return todo;
       });
       setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Whats the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updatetodo}/>
        </div>
    );
};

export default TodoList
