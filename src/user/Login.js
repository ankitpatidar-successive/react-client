import React from 'react';
import './LoginCss.css'
import { TextField,Button,Form,FormLayout} from '@shopify/polaris';
import { useState } from 'react';
/* Function component  
const  Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const emailValidation = () => {
    const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(emailregex)){
        return true;
    }
    return false;
}
const passwordValidation = () => {
  const passwordregex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  if(password.match(passwordregex)){
    return true;
  }
  else{
    return false;
  }
}
  const onSubmitt = () =>{
    var res = emailValidation();
    var pass = passwordValidation();
    if(!res){
      alert("email is not in proper format")
    }
    
    else if (!pass){
      alert("password is not in proper format")
    }
    else{
      window.alert("Email:"+ email + "  Password:" + password);
      setEmail('');
      setPassword('');
    }
    }
  
  return( 
    <div className = "main">
    <h1 className = "heading">Welcome to my Login Page</h1>
      <Form onSubmit = {onSubmitt}> 
          <FormLayout>
            <div className = "sub-main">
     <TextField label="Email" autoComplete="off" align="left" type="email" value= {email}
      onChange ={ (newValue) => setEmail(newValue)} />
            <br/>
            <TextField label="Password" autoComplete="off" align="left" type="password" value = {password}
      onChange ={ (newValue) => setPassword(newValue)} />
      </div>
      <div className="buttonCss">
            <Button submit >Submit</Button>
            </div>
            </FormLayout>
        </Form>
      </div>
  );

}
export default Login;


This is Class component*/
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
