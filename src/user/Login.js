import React, { useState} from "react";
import { Form, TextField, Button, FormLayout} from '@shopify/polaris';
import "./LoginCss.css";
import dummyData from "../data/login";
import Dashboard from "../dashboard/Dashboard";
import { useNavigate } from "react-router";
// function component
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [role, setRole] = useState("");
    const emailValidation = () => {
        let REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email === "") {
          setEmailError("email is required")
        }
        else if(email.match(REGEX)){
          setEmailError("")
        }
        else {
          setEmailError("please Enter valid Email")
        }
      }
      const passwordErrorValidation = () => {
        if(password === ""){
          setPasswordError('Password is required')
        }
        else {
          setPasswordError("")
        }
      }
     const passwordValidation = () => {
         let REGEX = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$";
         if(password.match(REGEX)) {
           return true;
         }
         else {
           return false;
         }
       }
       const onSubmit = () => {
        let pass = passwordValidation();
        if(emailError !== "") {
          alert('Email is not Valid and not proper format read the instruction carefully.')
        }
        else if(!pass) {
          alert('Password is not Valid because minumum six inputs are allowed. ')
        }
        else {
            dummyData.forEach((data) => {
              if(data.email === email && data.password === password){
                setEmail("");
                setPassword("");
                setRole(data.type);
                navigate('/'+ data.type);
              }
            });
          setEmail('');
          setPassword('');
        }
      }
    return(
        <div>
            <Form onSubmit={onSubmit}>
                <FormLayout >
                   <div  className="main" >
                        <h1 >Welcome to the Login Page</h1>
                        <div className="sub-main" >
                            <TextField  label="Email" autoComplete="off" align="left" type="email" onChange={(e) => setEmail(e)} onBlur = {emailValidation} value={email} />
                            <span className = "error">{emailError}</span>
                        </div>
                        <div className="sub-main" >
                            <TextField  label="Password" autoComplete="off" align="left" type="password" onChange={(e) => setPassword(e)} onBlur = {passwordErrorValidation} value={password} />
                            <span className = "error">{passwordError}</span>
                        </div>
                        <div  className="buttonCss" >
                            <Button  submit > Login </Button>
                        </div>
                    </div>
                </FormLayout>
            </Form>
            {role !== '' && <Dashboard role={role}/>}
        </div>
    );
}
export default Login;


//This is Class component
/*
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onSubmitt = this.onSubmitt.bind(this);
  }
  onSubmitt(event) {
    window.alert("email:" + this.state.email)
    this.setState({email:"",password:""});
    event.preventDefault();
  }
  render(){
  return(
    <div className = "main">
    <h1 className = "heading">Welcome to my Login Page</h1>
      <Form onSubmit = {this.onSubmitt}>
          <FormLayout>
            <div className = "sub-main">
     <TextField label="Email" autoComplete="off" align="left" type="email" value= {this.state.email}
      onChange = {(newValue) => this.setState({email:newValue})} />
            <br/>
            <TextField label="Password" autoComplete="off" align="left" type="password" value = {this.state.password}
     onChange = {(newValue) => this.setState({password:newValue})} />
      </div>
      <div className="buttonCss">
            <Button submit >Submit</Button>
            </div>
            </FormLayout>
        </Form>
      </div>
  );
  }
}
export default Login;
*/
