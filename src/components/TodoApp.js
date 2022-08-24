import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoManager from './TodoManager'
import QueryFilter from './QueryFilter'
import useInit from '../hooks/init'

const TodoApp = () => {
    const init = useInit()

    return init ? (
        <>
            <QueryFilter />
            <AddTodo />
            <TodoList />
            <TodoManager />
        </>
    ) : <div>loading...</div>
}

export default TodoApp
