import { useRoutes } from "react-router-dom";
import Formulario from "./pages/formulario";
import Home from "./pages/home";

function Routes() {
    return useRoutes([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/formulario",
            element:<Formulario/>
        }
    ])
    ;
}

export default Routes;