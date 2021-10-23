import TodoList from '../components/TodoForm/TodoList';
import TodoAppTimeline from '../components/TodoAppTimeline/TodoAppTimeline'
import About from '../components/About/About';
const routes = [
    {
        name: "TODO LIST",
        link: "/TodoList",
        exact: "true",
        component: TodoList
    },
    {
        name: "TODO VERTICAL TIMELINE",
        link: "/TodoAppTimeline",
        exact: "false",
        component: TodoAppTimeline
    },
    {
        name: "ABOUT ME",
        link: "/AboutMe",
        exact: "false",
        component: About
    }
]
    

export default routes;
