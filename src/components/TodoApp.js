import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoManager from './TodoManager'
import QueryFilter from './QueryFilter'
import Logout from './Logout'
import useInit from '../hooks/useInit'

const TodoApp = () => {
    const init = useInit()

    return init ? (
        <>
            <Logout />
            <QueryFilter />
            <AddTodo />
            <TodoList />
            <TodoManager />
        </>
    ) : <div>loading...</div>
}

export default TodoApp
