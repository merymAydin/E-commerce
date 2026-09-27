import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const user = useSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: rest.location.pathname },
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute


