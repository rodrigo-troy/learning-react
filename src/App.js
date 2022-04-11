import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/'
                       element={
                           <div className="App">
                               <header className="App-header">
                                   Learning React
                               </header>
                           </div>}/>
            </Routes>
        </Router>
    );
}
