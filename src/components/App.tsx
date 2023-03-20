import { useState, useEffect, useRef } from "react";
import {ITodo} from '../types/data'
import {ToDoList} from './ToDoList'
import '../css/main.css'


const App: React.FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodo] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter')
        addTodo()

    }

    const addToDo = () => {

    }


    const removeToDo = (id: number): void => {
        setTodo(todos.filter(todo => todo.id !== id))
        
    }
    

    const toggleToDo = (id: number): void => {
        setTodo(todos.map(todo => {
            if (todo.id !== id) return todo

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
        
    }
    const addTodo = () => {
        setTodo([...todos, {
            id: Date.now(),
            title: value,
            complete: false,
        
        }])
        setValue('')
    }

useEffect(() => {
    inputRef.current?.focus()
})

    return (  
        <div>
             <div>
            <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
            <button className="add" onClick={addTodo}>Add</button>
        </div>
        <ToDoList items={todos}  removeToDo={removeToDo} toggleToDo={toggleToDo}  />
        </div>
       
    );
}
 
export {App}


