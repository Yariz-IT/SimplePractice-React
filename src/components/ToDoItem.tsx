import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
    removeToDo: (id: number) => void
    toggleToDo: (id: number) => void

}

const TodoItem: React.FC<ITodoItem> = (props) => {

    const { id, title, complete, toggleToDo, removeToDo } = props

    return (<div>
        <input placeholder='Введите текс' className='input' type="checkbox" 
        checked={complete} onChange={() => 
        toggleToDo(id)} />
        {title}

        <button className='btn' 
        onClick={() => 
        removeToDo(id)}> x</button>

    </div>)
}

export { TodoItem }