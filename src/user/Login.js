import React from 'react';
import { TextField,Button,Form,FormLayout} from '@shopify/polaris';
import { useState , useCallback} from 'react';
import './LoginCss.css';
const  Login = () => {
    const handleSubmit = useCallback((_event) => {
        setemail('');
        setpassword('');
      }, []);
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [allUser,setAllUser] = useState([]);
    const handleChange = useCallback((newValue) => setemail(newValue), []);
    const handleChangePass = useCallback((newValue) => setpassword(newValue), []);
    const onSubmit = (e) =>{
        e.preventDefault();
        const newUser={email:email,password:password}
        //window.alert(newUser.password);
        setAllUser([...allUser,newUser]);
        setemail("");
        setpassword("");
        window.alert(newUser.email +" " +  newUser.password);
        //console.log(allUser);

    }
  return(
      <div className="main">
      <Form onSubmit={handleSubmit}>
          <FormLayout><h1 className="sub-main">Login Page</h1>
     <TextField label="Email" autoComplete="off" align="left" type="email" value={email}
      onChange={handleChange} className="email" />
            <TextField label="Password" autoComplete="off" align="left" type="password"value={password}
      onChange={handleChangePass} />
      <div className="buttonCss">
            <Button onClick={onSubmit} >Submit</Button>
            </div>
            </FormLayout>
        </Form>
        </div>
  );

}
export default Login;

// class Login extends React.Component {
//     constructor(props){
//       super(props);
//       this.state={
//       email:'',
//       password:''
//       }
//      }
//      handleSubmit(){
//          console.log('hfkwekysdfgvard');
//      }
//     render() {
//    return( 
//       <Form onSubmit={this.handleSubmit}>
//           <FormLayout>
//      <TextField label="Email" autoComplete="off" align="left" type="email" value={this.email}
//       onChange={(newValue) => this.setState({email:newValue})} />
//             <br/>
//             <TextField label="Password" autoComplete="off" align="left" type="password"value={this.password}
//       onChange={(newValue) => this.setState({password:newValue})} />
//             <br></br>
//             <Button submit>Submit</Button>
//             </FormLayout>
//         </Form>
//       );

//       }
//     }
//     export default Login;