import React, { useEffect, useState } from 'react'
// import Card from './Card';
import axios from "axios"
import { Link } from "react-router-dom"
import "./Cards.css"
function Cards({ filter, setChosenHouse }) {
  const [results, setResults] = useState([]);
  const [showCard, setShowCard] = useState(true);
  const [filteredCities, setFilteredCities] = useState([])
  const [id, setId] = useState(null)
  console.log(filter)
  useEffect(() => {
    async function getDataFromApi() {
      try {
        const { data } = await axios.get(
          "https://6374b4b508104a9c5f869829.mockapi.io/Data/Homies"
        );
        console.log(data);

        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }
    getDataFromApi();
  }, []);


  const deleteData = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://6374b4b508104a9c5f869829.mockapi.io/Data/Homies/${id}`
      );
      setResults((prev) => {
        return prev.filter((item) => item.id !== id);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const filtered = results.filter((city) => city.city === filter)
    setFilteredCities(filtered)
  }, [results])
  const drawData = () => {
    return filteredCities.map((result, i) => {
      return (
        <div className='cards' key={i}
        >
          <Link to="/card">
            <img src={result.avatar} style={{ height: "60%", width: "100%" }} alt={result.id}
              onClick={() => {
                setChosenHouse(result.id)
              }}
            />
          </Link>
          <h5>{result.name}</h5>
          <h5>{result.header}</h5>
          <h5>{result.city}</h5>
          <h5>{result.description}</h5>
          <button onClick={() => deleteData(result.id)}>Remove</button>
        </div>
      )
    })
  }
  return (
    <div className='cardsContainer' style={{ marginTop: "100px" }}>{drawData()}</div>
  )
}
export default Cards;