import React, { useState } from 'react'

const TodoForm = ({ addTodo,todos }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === '') {
            setError('Task cannot be empty !!');
        }else if (todos.some(todo => todo.task === value.trim())) {
            setError('Task already exists !!');
        }else {
            addTodo(value);
            setValue('');
            setError('');
        }
    };
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='What&apos;s the task?' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    )
}

export default TodoForm
