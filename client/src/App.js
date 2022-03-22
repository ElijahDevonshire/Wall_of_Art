import './App.css';
import ArtForm from './components/ArtForm';
import { Router } from '@reach/router';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import UpdateOne from './components/UpdateOne';


function App() {
    return (
        <div className="App">
            <Router>
                <ArtForm path="/new-art" />
                <DisplayAll path="/home" />
                <DisplayOne path="/art/:id" />
                <UpdateOne path="/art/:id/edit" />
            </Router>
        </div>
    );
}

export default App;
