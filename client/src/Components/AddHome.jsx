import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddHome.css";

function AddHome(){
    const [posted,setPosted] = useState(false);
    const [name,setName] = useState("");
    const [avatar,setAvatar] = useState("");
    const [header,setHeader] = useState("");
    const [description,setDescription] = useState("");
    const [city,setCity] = useState("");
    const [createdAt,setCreatedAt] = useState("");
    const navigate = useNavigate();
    const addData = async (name,avatar,header,description,city) => {
        try {
          const { data } = await axios.post(
            "https://6374b4b508104a9c5f869829.mockapi.io/Data/Homies",
            {
              name,
              avatar,
              header,
              description,
              city
            }
          );
          console.log(data);
          setPosted(true);
        } catch (error) {
          console.log(error);
        }
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addData(name,avatar,header,description,city);
            setName("")
            setAvatar("")
            setHeader("")
            setDescription("")
            setCity("")
        } catch (e) {
            console.log(e.message);
        }
    };
    return (
        <div className="add-home">
            <h1>Add Home</h1>
            <form onSubmit={handleSubmit}>
            <br></br>
                <label htmlFor="name">Name</label>
                <br></br>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br></br>
                <label htmlFor="avatar">Avatar</label>
                <br></br>
                <input type="text" id="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
                <br></br>
                <label htmlFor="header">Header</label>
                <br></br>
                <input type="text" id="header" value={header} onChange={(e) => setHeader(e.target.value)} />
                <br></br>
                <label htmlFor="description">Description</label>
                <br></br>
                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <br></br>
                <label htmlFor="city">City</label>
                <br></br>
                <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddHome;