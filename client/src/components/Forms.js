import React, { useState } from 'react'




export const Forms = () => {
    const [taskName, setTastName] = useState("");
    const createTodo = () => { }
    const handleChange = (e) => {
        setTastName(e.target.value);
     }
    return (

        <form onSubmit={createTodo}>
            <input type='text' placeholder='Add a wish' className='task-input'
                value={taskName} required onChange={handleChange}></input>
            <button className='button-add' type='submit'>Add wish</button>

        </form>
    )
}
