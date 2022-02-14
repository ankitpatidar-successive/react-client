import styled from "styled-components";

const Textfield = styled.div`
    margin-left: 10px;
    input{
        width:100%;
        height: 40px;
    }
`
;
const LableInput = styled.h1`
    color:black;
    font-size:20px;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 15px;
`
const Error = styled.a`
    color:red;
    margin-left:10px;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export {Textfield,LableInput,Error,Button};
