import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from '~/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function App() {
    const dispatch = useDispatch();
    axios.get('https://localhost:7056/api/Department').then((data) => {
        dispatch({ type: 'SET_DEPARTMENT', payload: data.data });
    });
    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route, ind) => {
                        const Clayout = route.layout || DefaultLayout;
                        const Page = route.element;
                        return (
                            <Route
                                key={ind}
                                path={route.path}
                                element={
                                    <Clayout>
                                        <Page />
                                    </Clayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
