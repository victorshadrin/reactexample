import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
    const [opt, setOpt] = useState(0);

    const doOnclick = () => {
        console.log(opt)
        setOpt(opt === 0 ? 1 : 0)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Button color="primary" onClick={doOnclick}>
                    test
                </Button>
            </header>
            <div className="body-block">
                {opt === 0 && (
                    <div>BY!!!</div>
                )
                }
                {opt === 1 && (
                    <div>HELLO!!</div>
                )
                }
            </div>
        </div>
    );
}

export default App;
