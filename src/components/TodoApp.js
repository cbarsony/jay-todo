import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoManager from './TodoManager'
import QueryFilter from './QueryFilter'

const TodoApp = () => (
    <>
        <QueryFilter />
        <AddTodo />
        <TodoList />
        <TodoManager />
    </>
)

export default TodoApp
