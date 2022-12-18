import React, { useState, useEffect } from 'react'
import Cards from '../Components/Cards'
import axios from "axios"
import { Link } from "react-router-dom"
import AddHome from '../Components/AddHome'
import './HomePage.css'
import background from "../img/image.png"
import Gallery from "../Components/Gallery"
function HomePage({ setFilter }) {
    const [city, setCity] = useState("")

    const cityName = (e) => {
        setCity(e.target.value)
    }
    console.log(city)

    const chosenCity = () => {
        setFilter(city);

    }
    return (

        <>
            <div className='homewrapper' style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                <div className='slogen'><h2>Travel more for less with HOMIES</h2></div>
                <div className='des'><h3>What destination do you have in mind?</h3></div>
                <br></br>
                <br></br>
                <div className='searchBox'>
                    <input className="form-control" placeholder="Where are you going?"
                        role="combobox" onChange={cityName} />
                    <Link to="/Cards">
                        <button onClick={chosenCity}><span className="material-symbols-outlined">
                            search
                        </span> search</button>
                    </Link>
                </div>
                <br></br>
                <br></br>
                <div className="subswrapper">
                    <div>100,000 <br></br>     subs</div>
                    <div>+130 <br></br>Contries</div>
                    <div>Every 2 minutes<br></br>
                        an exchange is finalized</div>
                </div>
            </div>
            <Gallery />
        </>
    )
}
export default HomePage;