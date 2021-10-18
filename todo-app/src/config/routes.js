import Todo from '../components/AddTodo/Todo'
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
    }
]
    

export default routes;
