import { useState, useEffect } from "react";

import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BASE_URL from "../Config";

const Home=()=>{
const [mydata, setMydata] = useState([]);
const loadData=async()=>{
    let api=`${BASE_URL}/doctor/homedoctorsdisplay`;
    try {
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    } catch (error) {
         console.log(error);
    }
}

useEffect(()=>{
    loadData();
}, []);


const ans= mydata.map((key)=>{
    return(
        <>
           <Card style={{ width: '18rem',backgroundColor:"lightgrey",marginBottom:"20px"}}>
      <Card.Body>
        <Card.Title> <h3 > {key.name} </h3></Card.Title>
        <Card.Text>
         <h5> {key.specailization}</h5>
         <div>  Address : {key.address} </div>
        <div>   City : {key.city} </div>
         <div>  Mobile : {key.mobile}</div>
          Email : {key.email}
        </Card.Text>
        <Button style={{backgroundColor:"teal"}} variant="primary">Appointment Now!</Button>
      </Card.Body>
    </Card>
        
        </>
    )
})



    return(
        <>
         <div>
            <img src="/public/hr1.jpg" alt="" style={{width:"100%",height:"120vh"}} />
         </div>
        
         <h1 style={{color:"black",marginLeft:"20px",marginTop:"10px",marginBottom:"30px",textDecoration:"underline",textAlign:"center"}}>DOCTORS DETAILS</h1>
        <div id="homeDoctors">
           
        {ans}
        </div>
         

        </>
    )
}


export default Home;