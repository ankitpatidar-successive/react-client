import { Form, FormLayout, TextField } from "@shopify/polaris";
import React from "react";
const Add = () =>{
  return(
        <div>
            <h1 className = "heading">Welcome to BOOK Add Page</h1>
            <Form>
                <FormLayout>
                    <div className = "textfield">
                        <TextField label="Book-Name" autoComplete="off" type="text" align="left" type="string"/>
                        <TextField label="Author-Name" autoComplete="off" type="text" align="left" type="string"/>
                        <TextField label="Price" autoComplete="off" type="text" align="left" type="string"/>
                    </div>
                </FormLayout>
            </Form>
        </div>
    );
}
export default Add;