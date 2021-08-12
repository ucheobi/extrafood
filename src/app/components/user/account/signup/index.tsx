import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Form } from "../form";
import { Button } from "../form/button";
import { Input } from "../form/input";
import { Title } from "../title";

const SignupContainer = styled.div`
    ${tw`
        flex
        w-full
        justify-center
        mt-2
        mb-2
        flex-col
        p-2
    `}
`;


export const Signup = () => {

    const [ data, setData ] = useState({
        name:"",
        email: "",
        password: "",
        redirectUser: false
    });

    const { name, email, password } = data;
    
    return <SignupContainer>
        
        <Title title="New Members" />
        <Form>
            <Input
                 type="text"
                 text="Name" 
                 id="name"
                 name="name"
                 value={name} 
            />
             <Input
                 type="text"
                 text="Email Address" 
                 id="email"
                 name="email"
                 value={email} 
            />
            <Input
                 type="password"
                 text="Password" 
                 id="password"
                 name="passowrd"
                 value={password} 
            />

          <Button text="Register" />
        </Form>
    </SignupContainer>
}