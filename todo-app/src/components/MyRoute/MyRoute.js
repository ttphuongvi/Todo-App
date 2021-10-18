import { Route } from "react-router-dom";

const MyRoute = ({ path, component: Component, ...rest }) => {
    return (
        <Route path={path}
            render={(props) => (
                <Component {...props} />
            )}
            {...rest}
        />
    )
}
export default MyRoute;