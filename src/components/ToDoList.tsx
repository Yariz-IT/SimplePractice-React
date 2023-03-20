import { TodoItem } from "./ToDoItem";

import { ITodo } from "../types/data";

interface ITodoListProps {
    items: ITodo[]
    toggleToDo: (id: number) => void
    removeToDo: (id: number) => void
}

const ToDoList: React.FC <ITodoListProps> = (props) => {

    const {items, toggleToDo, removeToDo} = props


    return ( <div>
        {
            items.map(todo => <TodoItem key={todo.id} 
                removeToDo={removeToDo} 
                toggleToDo={toggleToDo} {...todo} />)
        }

    </div> );
}
 
export {ToDoList};