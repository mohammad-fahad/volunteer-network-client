import React, { useEffect, useState } from 'react';
import logo from '../logos/Group 1329.png';
import user from '../logos/users-alt 1.png';
import plus from '../logos/plus 1.png';
import trash from '../logos/trash-2 9.png';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [all, setAll] = useState([]);
    useEffect(() => {
        fetch(`https://volunteer-network-f.herokuapp.com/admin`)
            .then(res => res.json())
            .then(data => setAll(data))
    }, [all])

    const deleteUser = (_id) => {
        fetch(`https://volunteer-network-f.herokuapp.com/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                

            })
    }
    return (
        <div className="m-5">
            <div className="d-flex">
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <img style={{ width: '13vw' }} src={logo} alt="" />
                </Link>
                <h4 style={{ marginLeft: '10vw' }}>Volunteer registration list</h4>
            </div>
            <aside style={{ marginTop: '10vh', zIndex: '-1' }}>
            <Link to='/admin' style={{textDecoration: 'none'}}>
                <div className="d-flex">
                    <img style={{ height: '4vh' }} className="mr-3" src={user} alt="" />
                    <h6>Volunteer registration list</h6>
                </div>
                </Link>
                <Link to="addevent">
                    <div className="d-flex mt-3" style={{ cursor: 'pointer' }}>
                        <img style={{ height: '4vh' }} className="mr-3" src={plus} alt="" />
                        <h6>Add event</h6>
                    </div>
                    </Link>
            </aside>
            <main>

                <table className="table" style={{ marginLeft: '23vw', width: '70vw', marginTop: '-5vw' }}>
                    <thead className="thead-dark">
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registration date</th>
                            <th scope="col">Volunteer list</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            all.map(a =>
                                <tr className="bg-light" key={a._id}>
                                    <td>{a.Name}</td>
                                    <td>{a.email}</td>
                                    <td>{a.RegisterTime}</td>
                                    <td>{a.task}</td>
                                    <td onClick={() => deleteUser(a._id)}><img src={trash} className="bg-danger" style={{ cursor: 'pointer', height: '3vh'}} alt="" /></td>
                                </tr>)
                        }



                    </tbody>
                </table>




            </main>
        </div >
    );
};

export default Admin;