import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App';
import logo from '../logos/Group 1329.png';


const MyTsks = () => {
    const { loggedInUser } = useContext(UserContext);
    const [tasks, setTasks] = useState([]);
    const { _id } = useParams();


    useEffect(() => {
        fetch(`https://volunteer-network-f.herokuapp.com/mytsks?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))

    }, [tasks])

    const deleteProduct = (_id) => {
        fetch(`https://volunteer-network-f.herokuapp.com/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
               
            })

    }

    // useEffect(() => {
    //     deleteProduct();    // to re-render
    // })


    return (
        <div >
             <Navbar bg="transparent" variant="light" className="p-3 pr-5 pl-5">
                <Link to="/home">
                <img
                    src={logo}
                    width="170"
                    height="50"
                    className="d-inline-block align-top"
                    alt="volunteer logo"
                />
                </Link>
                <Nav className="ml-auto justify-content-within pr-5">
                    <Nav.Link to="/home" className="text-dark pr-5"><strong>Home</strong></Nav.Link>
                    <Nav.Link to="/donation" className="text-dark  pr-5"><strong>Donation</strong></Nav.Link>
                    <Nav.Link to="/event" className="text-dark pr-5"><strong>Event</strong></Nav.Link>
                    <Nav.Link to="/blogs" className="text-dark pr-5"><strong>Blogs</strong></Nav.Link>
                </Nav>
                <strong>{loggedInUser.name}</strong>
                </Navbar>
            <div className="d-flex flex-wrap justify-content-center">
            {
                tasks.map(tsk =>
                    <div key={tsk._id} className="border col-md-5 text-left m-5 d-flex">
                        <div>
                        <img style={{height: '15vh', marginRight: '2vw'}} src={tsk.img} alt=""/>
                        </div>
                        <div>                            
                            <h5>Work: {tsk.task}</h5>
                            <h5>Date: {tsk.RegisterTime}</h5>
                            <Button onClick={() => deleteProduct(tsk._id)} variant="danger">Cancel</Button>
                        </div>
                        
                    </div>
                )
            }
            </div>
            
           
        </div>
    );
};

export default MyTsks;