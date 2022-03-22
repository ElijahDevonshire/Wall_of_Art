import { Link, navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";



const DisplayOne = (props) => {
    const { id } = props;
    const [artData, setArtData] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/art/${id}`)
            .then((response) => {
                console.log(response);
                setArtData(response.data);
            })
            .catch((err) => console.log(err.response));
    }, []);

    const handleDeleteArt = (idFromBelow) => {
        axios
        .delete(`http://localhost:8000/api/art/${idFromBelow}`)
        .then((response) => {
            console.log(response);
            navigate("/home");
        })
        .catch((err) => {
            console.log(err.response);
        });
    };

    return (
        <div className="container">
            <div className="App-header">
                <h1>Wall of Art</h1>
                <h5>A place to share creations</h5>
                <Link to="/home">Back to Wall</Link>
            </div>
            <div className="displayOne">
                <p><img style={{ height: '300px' }} src={`${artData.image}`} alt="img n/a" /></p>
                <div className="details">
                    <h3>{artData.title}</h3>
                    <p>{artData.description}</p>
                    <p>Posted by: {artData.artist}</p>
                    <button onClick={() => navigate(`/art/${artData._id}/edit`)}>Update</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteArt(artData._id)}>
                        Delete {artData.title}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DisplayOne;