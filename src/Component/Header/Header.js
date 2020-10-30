import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import "./Header.css";
import { Link } from 'react-router-dom';
import cover from '../../images/cover.png';
import { UserContext } from '../../App';


const Header = () => {
    const { volunteers, setVolunteers } = useContext(UserContext)
    // const search = (e) => {
    //     document.getElementById("search").value = volunteers.find(fd => fd.name.toLoverCase() === document.getElementById("search").value.toLoverCase())
    //     return
    // }
    return (
        <div >
            <img style={{ height: '50vh', width: '100%', opacity: '0.6', position: 'absolute' }} src={cover} alt="" />
            <div style={{ position: 'relative' }}>
                <Navbar bg="transparent" variant="light" className="p-3 pr-5 pl-5">
                    <img
                        src={logo}
                        width="170"
                        height="50"
                        className="d-inline-block align-top"
                        alt="volunteer logo"
                    />
                    <Nav className="ml-auto justify-content-within pr-5">
                        <Nav.Link to="/home" className="text-dark pr-5"><strong>Home</strong></Nav.Link>
                        <Nav.Link to="/donation" className="text-dark  pr-5"><strong>Donation</strong></Nav.Link>
                        <Nav.Link to="/event" className="text-dark pr-5"><strong>Event</strong></Nav.Link>
                        <Nav.Link to="/blogs" className="text-dark pr-5"><strong>Blogs</strong></Nav.Link>
                    </Nav>

                    <Form inline>

                        <Button variant="primary" className="mr-4 pr-5 pl-5">Regular</Button>
                        <Link to="/admin" style={{ textDecoration: 'none' }}><Button variant="dark" className="pr-5 pl-5" to="/admin">Admin</Button></Link>
                    </Form>
                </Navbar>
                <div className="text-center container pt-5" style={{ marginTop: "10vh" }}>
                    <h3><strong style={{ fontSize: "3rem", paddingTop: "20vh" }}>I GROW BY HELPING PEOPLE IN NEED.</strong></h3>


                </div>
           </div>
        </div>
    );
};

export default Header;