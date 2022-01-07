
import React,{useContext,useState,useEffect} from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom';
import '../App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ContextApi } from './Context';

export const Studentdesc=() =>{
  const navigate =useNavigate();  
  const [student,setStudent] = useContext(ContextApi);
  const {id}=useParams();
  // console.log(id);

  const [data,setData]= useState({
      id:'',
      name:'',
      age:'',
      course:'',
      batch:''
  })
  const { name, age, course, batch } = data;  //destructuring for no need of obj.keys like format
  useEffect(() => {   //compunentWillUnmount compunentWillmount equivlent function
    loadUserData();
  }, [])
  const loadUserData = async()=>{  // since useeffect will be done after the end phase we use async await function
    const any = await student.filter((x)=>(x.id===id))
    any.map((x)=>setData(x))
  }
  const handle=(e)=>{
    const name =e.target.name;
    const value =e.target.value;
    setData({...data,[name]:value})
    // console.log(name,value);
  }
  const submit=(e)=>{
    e.preventDefault();
    if(name, age, course, batch===""){
      alert("enter the details");
    }else{ // user data collection
      if(id){//edit condition
        setStudent((pre)=>pre.map((stu)=>(stu.id===id)?  // to change the map for only edited data of student
          {
            "id":id,
            "name":name,
            "age":age,
            "course":course,
            "batch":batch
          }:stu))
      }else{ //new data condition
        const newdata={...data,id:`${Math.floor(Math.random() * 90 + 10)}`}//Date.now()
        setStudent([...student,newdata])
        // console.log(newdata);
      }navigate('/student');
    }
    
  }
  return (
  <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch',margin:'50px'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          name='name'
          id="outlined-required"
          label="Name"
          value={data.name}
          onChange={handle}
        />
        <TextField
          required
          name='age'
          id="outlined-number"
          label="Age"
          value={data.age}
          onChange={handle}
        />
      </div>
      <div>
      <TextField
          required
          name='course'
          id="outlined-required"
          label="Course"
          value={data.course}
          onChange={handle}
        />
        <TextField
          required
          name='batch'
          id="outlined-required"
          label="Batch"
          value={data.batch}
          onChange={handle}
        />
      </div>
      <Button
        style={{
        color:'black',
        borderColor:'black',
        marginLeft:'63%'
      }}
      variant="outlined"><Link to='../student'>Cancel</Link></Button>  &nbsp;  <Button onClick={submit} variant="contained">Update!</Button>
    </Box>   
  </div> 
  );
}


