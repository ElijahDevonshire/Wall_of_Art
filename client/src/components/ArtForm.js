import { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const ArtForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [artist, setArtist] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/art", {
            title,
            description,
            artist,
            image,
            })
            .then((response) => {
                console.log("SUCCESS");
                console.log(response);
                navigate("/home");
            })
            .catch((err) => {
                console.log("ERROR");
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className="container">
            <div className="App-header">
                <h2>Add New Art</h2>
                <h5>A place to share creations</h5>
                <p><Link to="/home">Back to Wall</Link></p>
            </div>
            <div className="form-box">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <input 
                            type="text"
                            id="title"
                            placeholder="Art Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    {errors.title ? <p>{errors.title.message}</p> : null}
                    <div className="form-group">
                        <input 
                            type="text"
                            id="description"
                            placeholder="Art Description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    {errors.description ? <p>{errors.description.message}</p> : null}
                    <div className="form-group">
                        <input 
                            type="text"
                            id="artist"
                            placeholder="Name of uploader"
                            onChange={(e) => setArtist(e.target.value)}
                        />
                    </div>
                    {errors.artist ? <p>{errors.artist.message}</p> : null}
                    <div className="form-group">
                        <input 
                            type="text"
                            id="image"
                            placeholder="Image URL"
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    {errors.image ? <p>{errors.image.message}</p> : null}
                    <button className="form-group" type="submit">Add to Wall</button>
                </form>
            </div>
        </div>
    );
};

export default ArtForm;