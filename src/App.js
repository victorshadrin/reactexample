import React, {useState} from 'react';
import {useRoutes, A, navigate} from 'hookrouter';
import './App.css';
import Button from '@material-ui/core/Button';
import Main from "./main";
import Edit from "./edit";


const routes = {
    "/": () => <Main />,
    "/edit": () => <Edit />,
};

function App() {
    const [opt, setOpt] = useState(0);
    const routeResult = useRoutes(routes);

    const doOnclick = () => {
        navigate(opt === 0 ? '/edit' : "/", true);
        setOpt(opt === 0 ? 1 : 0)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Button color="primary" onClick={doOnclick}>
                    test
                </Button>
            </header>
            {routeResult}
        </div>
    );
}

export default App;
