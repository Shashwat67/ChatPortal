import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import axios from 'axios';
import "./Login.css";

const Login = () => {
  // const [get, setGet] = useState([{ message: "started" }]);
  const [postvalue, setPost] = useState();
  const [bool, setBool] = useState(false);
  const [incorrectData, setIncorrectData] = useState(false);
  const [userName, setUserName] = useState();
  const [newPassword, setPassword] = useState();
  const navigate = useNavigate("");
  const [showPassword, setShowPassword] = useState(false);
  let apikey = process.env.REACT_APP_POST_USER_LOGIN;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleSubmit = () => {
  //   fetch("http://localhost:8000/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: userName,
  //       password: newPassword
  //     })
  //   })
  //     .then(res => res.json)
  //     .then((response) => { setPost(response.data); console.log(response); });

  //   console.log(postvalue);//previous value
  // }
  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("saved");
    try {
        // //pass items to store in database
        // axios.post(apikey, {
        //   userName: userName,
        //   password: newPassword
        // }
      axios.post(apikey + "?userName=" + userName + "&password=" + newPassword, {

        userName: userName,

        password: newPassword

      }
        , {
            headers: {
                "Content-Type": 'application/json'   
            }
        }
        ).then((response) => {
          console.log(response);
          setPost(response.data); 
        });

    } catch (err) {
        console.log(err);
    }
}


  useEffect(() => {
    console.log(postvalue);
    if (postvalue === "User signedUp successfully") {
      console.log(postvalue);
      navigate("/user", {state:"login"});
      setBool(true);
    }
    else {
      console.log("wrong");
      setBool(false);
    }
  }, [postvalue])

  // const [uname, setUname] = useState();
  // const [password, setPassword] = useState();

  // async function submit() {
  //     try {
  //         await axios.post("http://localhost:50006/tokenSent",
  //             {
  //                 Name: uname,
  //                 Password: password,
  //             },
  //             { headers: { "Content-Type": "application/json", }, });
  //     }
  //     catch (error) {
  //         console.log(error);
  //         alert("Submit have issue and get failed!!!");
  //     }
  // }
  // const handlePassword = (event) => {
  //     setPassword(event.target.value);
  //     console.log(password);
  // }
  // const handleInput = (event) => {
  //     setUname(event.target.value);
  //     console.log(uname);
  // }
  return (

    <div className="loginPage" align="centre">
    <h1> Login</h1>
    <Box component="form" className="size"
      noValidate sx={{ '& > :not(style)': { m: 1 } }}>
        {incorrectData?<div className="incorrect">Incorrect credentials</div>:<div></div>}
      <div className="feilds">
        <FormControl className="size" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">UserName</InputLabel>
          <OutlinedInput
          size='outlinedInput'
            id="outlined-adornment-password"
            startAdornment={
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            }
            label="Password"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </FormControl>
      </div>
      <div className="feilds" >
        <FormControl className="size" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start"> <LockIcon /></InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </FormControl>
      </div>
      <div className="feilds">
        <Button className="size continue" variant="contained" onClick={handleSubmit} >Login</Button>
      </div>

        
      <p className="register" onClick={() => navigate("/signUp")}><u>Signup Here</u></p>
 

    </Box>

  </div>

  );

}
export default Login;