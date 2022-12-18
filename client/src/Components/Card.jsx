import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Card.css"
function Card({ chosenHouse }) {
    const [results, setResults] = useState([]);
    const [selectedHouse, setSelectedHouse] = useState([])
    console.log(chosenHouse)
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

    useEffect(() => {
        const house = results.filter((property) => property.id === chosenHouse);
        console.log(house)
        setSelectedHouse(house)
    }, [results, chosenHouse])

    const showHouse = () => {
        return selectedHouse?.map(house => {
            return <div className='section'>
                <div className='wrapper'>
                    <img src={house.avatar} alt={house.name} />
                    <div>
                        {house.name}
                    </div>
                    <div><p>{house.header}</p></div>
                    <div><p>{house.city}</p></div>
                    <div><p><span className="material-symbols-outlined">
star_rate
</span></p></div>
                    <div><p><span style={{ color: "red" }} className="material-symbols-outlined">
                        wifi
                    </span></p></div>
                    <div><p>{house.description}</p></div>
                    <button className="btn">get in touch</button>
                </div>
            </div>
        })
    }

    // function cardInfo() {
    //     return (
    //       <Card style={{ width: '18rem' }}>
    //         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    //         <Card.Body>
    //           <Card.Title>Card Title</Card.Title>
    //           <Card.Text>
    //             Some quick example text to build on the card title and make up the
    //             bulk of the card's content.
    //           </Card.Text>
    //         </Card.Body>
    //         <ListGroup className="list-group-flush">
    //           <ListGroup.Item>Cras justo odio</ListGroup.Item>
    //           <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    //           <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    //         </ListGroup>
    //         <Card.Body>
    //           <Card.Link href="#">Card Link</Card.Link>
    //           <Card.Link href="#">Another Link</Card.Link>
    //         </Card.Body>
    //       </Card>
    //     );
    //   }
    return (
        <div>
            {showHouse()}
        </div>
    )
}
export default Card;