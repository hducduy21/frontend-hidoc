
import './App.css';

import Footer from '~/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from '~/routes';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            routes.map((route,ind)=>{
              const Clayout = route.layout || Layout;
              const Page = route.element
              return <Route key={ind} path={route.path} element={
                <Clayout>
                  <Page/>
                </Clayout>} />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
