// import React, { useState } from 'react';
// import TextFieldInput from '../components/TextField/TextField';
// const TextFieldDemo = () => {
//     const [valid, setValid] = useState("");
//     const [invalid, setInvalid] = useState("");
//     const [error, setError] = useState("");

//     const errorInput = () => {
//         if (invalid >= 101) {
//             setError("Could not be greater than")
//         }
//         if (invalid <= 100) {
//             setError("");
//         }
//     }   
//  return (
//     <React.Fragment>

//         <TextFieldInput placeholder="Disabled Input" value="" error="" disabled={true} label="This is Disabeled Input" type="text" color="lightgray" />
//         <TextFieldInput placeholder="Accessible" value={valid} error="" disabled={false} label="A Valid Input" onChange={(newValue) => setValid(newValue.target.value)} type="text" color="palevioletred" />
//         <TextFieldInput placeholder="" value={invalid} error={error} disabled={false} label="An Input" onChange={(newValue) => setInvalid(newValue.target.value)} onBlur={errorInput} type="number" color="palevioletred" />
//     </React.Fragment>
// )
//         }
// export default TextFieldDemo;

import React, { useState } from "react";
import { Button, TextFieldInput } from "../components";
import * as yup from 'yup';
import { Form, FormLayout } from "@shopify/polaris";
const schema = yup.object().shape({
    name :yup.string().min(3,"Name Must be three chracters").required(),
    sport:yup.string().required(),
    whatYouDo:yup.string().required()
})
const TextFieldDemo = () => {
    const [disabled,setDisabled] = useState(true);
    const [error,setError] = useState({
        name:'',
        sport:'',
        whatYouDo:''
    });
    const [formData,setFormData] = useState({
        name: '',
        sport: '' ,
        whatYouDo:''}
    )
    const getError = async(key) => {
        await schema.validate(formData, { abortEarly: false}).catch(function (err) {
            err.inner.forEach(e => {
                if (e.path === key) {
                    setError(prevalue =>{
                        return {
                            ...prevalue,
                            [key]: e.message
                        }
                    })
                }
            })
        });
    }
    const isTouched = async(value,key) => {
        setFormData(prevalue =>{
            return{
                ...prevalue,
                [key]: value,
            }
        })
        const validation = await schema.validate(formData);
        if(validation){
            setDisabled(false);
        }
        else{
            setDisabled(true)
        }
    }
    return(
        <React.Fragment>
            <Form>
                <FormLayout>
                    <TextFieldInput placeHolder = {"Disable Input"} error = {""} disable = {true} value = {""} label = {"This is Disabled Input"} type={"text"}/>
                    <TextFieldInput placeHolder = {""} disable = {false} error = {error.name} value = {formData.name} label = {"Name"} type= {"text"} onChange = { (newValue) => isTouched(newValue,'name')} onBlur = { () => getError('name')} />
                    <TextFieldInput placeHolder = {""} disable = {false} error = {error.sport} value = {formData.sport} label = {"Sports"} type = {"text"} onChange = { (newValue) => isTouched(newValue,'sport')} onBlur = { () => getError('sport') } />
                    <TextFieldInput placeHolder = {""}  disable = {false} error = {error.whatYouDo} value = {formData.whatYouDo} label = {"What You Do"} type = {"text"} onChange = { (newValue) => isTouched(newValue,'whatYouDo') } onBlur = { () => getError('whatYouDo') }/>
                    <Button disable = {disabled}/>
                </FormLayout>
            </Form>
        </React.Fragment>
    );
}
export default TextFieldDemo;
