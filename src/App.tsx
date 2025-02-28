import './App.css';
import Layout from "./components/Layout/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import Show from "./containers/Show/Show.tsx";


const App = () => {
    return (
        <Layout>
            <Routes>
                <Route
                    path="/"
                    element={(
                        <Home
                        />)}
                />
                <Route
                    path="/shows"
                    element={(<Home />)}
                />
                <Route path='shows/:id' element={<Show />}/>
            </Routes>
        </Layout>
    );
};

export default App;