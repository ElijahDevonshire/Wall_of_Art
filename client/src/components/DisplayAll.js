import { Link } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";



const DisplayAll = () => {
    const [art, setArt] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/art")
            .then((response) => {
                console.log(response.data);
                setArt(response.data);
            })
            .catch((err) => console.log(err.response));
    }, []);

    return (
        <div className="container">
            <div className="App-header">
                <h1>Wall of Art</h1>
                <h5>A place to share creations</h5>
                <Link to="/new-art">Add to Wall</Link>
            </div>
            
            {art.map((art) => {
                return (
                    <div key={art._id}>
                        <img style={{ height: '300px' }} src={`${art.image}`} alt="img n/a" />
                        <p>Title: <Link to={`/art/${art._id}`}> {art.title}</Link></p>
                        <hr style={{ borderTop: "1px solid grey" }} />
                    </div>
                );
            })}
        </div>
    );
};

export default DisplayAll;