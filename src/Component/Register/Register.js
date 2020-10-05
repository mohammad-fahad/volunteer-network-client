import React, { useContext, useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png';
import "react-datepicker/dist/react-datepicker.css";
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import '../../Admin/style.css';




const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();

   const {showdata, setShowData, loggedInUser} = useContext(UserContext);
   console.log(showdata);
   const {img} = showdata;
    const [startDate, setStartDate] = useState(new Date());
    const {_id} = useParams();
    useEffect (() => {
        fetch(`https://volunteer-network-f.herokuapp.com/task/${_id}`)
        .then(res => res.json())
        .then(data => setShowData(data))
        }, [])

      
    const onSubmit = data => {
        const all = {...data, img}
       console.log(data);
        fetch('https://volunteer-network-f.herokuapp.com/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(all)
        })        
                 history.push('/myTsks')           
        
    }
    return (
        <div className="text-center bg-light">
            <img className="m-auto mb-5" src={logo} style={{ height: '10vh', marginTop: '5vh' }} alt="" />
           
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <h4>Register as a volunteer</h4>
            {/* <img name="img" src={showdata.img} style={{ height: '15vh', marginTop: '5vh'}}alt="" ref={register({ required: true })}/> <br/> */}
            <input className="mt-5 input-field " name="Name" defaultValue={loggedInUser.name} ref={register({ required: true })} /><br/>
                    {errors.Name && <span>your name is required<br/></span>}
                <input className="input-field " name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} /><br/>
                    {errors.email && <span>your email is required<br/></span>}
                <input className="input-field " name="task" defaultValue={showdata.name} ref={register({ required: true })} /><br/>                    
                <input className="input-field " name="RegisterTime" type="date" ref={register({ required: true })} /><br/>
                    {errors.RegisterTime && <span>RegisterTime is required<br/></span>}
                <input type="submit" className="Registration-btn" />
                
        
               </form>    

               
        </div>
    );
};

export default Register;