import React, { useContext, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { UserContext } from '../../App';
import '../../Admin/style.css';

const Home = () => {
    const {volunteers, setVolunteers} = useContext(UserContext)
   
    const fetchData = () => {
        fetch('https://volunteer-network-f.herokuapp.com/volunteers')
        .then(res => res.json())
        .then(data => {
            setVolunteers(data);
        })
    }
    useEffect (() => {
        fetchData();
    }, [])

    
    return (
        <div>
            <Header />
            <div className="d-flex flex-wrap justify-content-center m-auto">
                {
                    volunteers.map(fd =>

                        <Card className="col-md-2 m-3 text-center work-container" key={fd._id} style={{ width: '18rem', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
                            <Link style={{textDecoration: 'none'}} to={`/register/${fd._id}`}>
                            <Card.Img variant="top" src={fd.img} />
                            <Card.Body className=" work-title" >
                                <Card.Title className="text-white" >{fd.name}</Card.Title>
                            </Card.Body>
                            </Link>
                        </Card>

                   )
            }
        </div>
        </div >
    );
};

export default Home;