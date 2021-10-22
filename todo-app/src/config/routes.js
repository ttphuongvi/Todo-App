import Todo from '../components/AddTodo/Todo'
import TodoList from '../components/TodoForm/TodoList';
import TodoAppTimeline from '../components/TodoAppTimeline/TodoAppTimeline'

const routes = [
    {
        name: "TODO APP",
        link: "/Todo-App",
        exact: "true",
        component: Todo
    },
    {
        name: "TIMELINE",
        link: "/TodoApp-Timeline",
        exact: "false",
        component: TodoAppTimeline
    },
    {
        name: "To do",
        link: "/Todo",
        exact: "false",
        component: TodoList
    }
]
    

export default routes;
