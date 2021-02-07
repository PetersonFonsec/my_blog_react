
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import notFound from "../pages/NotFound/index";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Suspense fallback={notFound}>
                <Route path="/lista" exact component={ lazy(() => import('../pages/List/index'))} />        
            </Suspense>
        </Switch>
    )
}

export default Routes