import TodoList from '../components/TodoForm/TodoList';
import TodoAppTimeline from '../components/TodoAppTimeline/TodoAppTimeline'

const routes = [
    {
        name: "TODO LIST",
        link: "/TodoList",
        exact: "false",
        component: TodoList
    },
    {
        name: "TIMELINE",
        link: "/TodoAppTimeline",
        exact: "true",
        component: TodoAppTimeline
    }
]
    

export default routes;
