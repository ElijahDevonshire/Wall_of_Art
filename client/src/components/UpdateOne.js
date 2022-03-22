import { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const UpdateOne = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [artist, setArtist] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/art/${props.id}`)
        .then((response) => {
            console.log(response);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setArtist(response.data.artist);
            setImage(response.data.image);
            setId(response.data._id);
        })
        .catch((err) => console.log(err.response));
    }, []);

    const handleUpdateArt = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:8000/api/art/${id}`, {
            title, 
            description, 
            artist, 
            image
        })
        .then((response) => {
            console.log(response);
            navigate("/home");
        })
        .catch((err) => {
            console.log(err.response);
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    }
    
    return (
        <div className="container">
            <div className="App-header">
                <h2>Add New Art</h2>
                <h5>A place to share creations</h5>
                <p><Link to="/home">Back to Wall</Link></p>
            </div>
            <form className="form-box" onSubmit={handleUpdateArt}>
                <div className="form-group">
                    <input
                    style={{width: "300px"}}
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                {errors.title ? <p>{errors.title.message}</p> : null}
                <div className="form-group">
                    <input
                    style={{width: "300px"}}
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                {errors.description ? <p>{errors.description.message}</p> : null}
                <div className="form-group">
                    <input
                        style={{width: "300px"}}
                        type="text"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />
                </div>
                {errors.artist ? <p>{errors.artist.message}</p> : null}
                <div className="form-group">
                    <input
                    style={{width: "300px"}}
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                {errors.image ? <p>{errors.image.message}</p> : null}
                <button>Update</button>
            </form>
        </div>
    );
};

export default UpdateOne;