import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Form } from "../form";
import { Button } from "../form/button";
import { Input } from "../form/input";
import { Title } from "../title";

const SigninContainer = styled.div`
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

export const Signin = () => {

    const [ data, setData ] = useState({
        email: "",
        password: "",
        redirectUser: false
    });

    const { email, password } = data;
    
    return <SigninContainer>
        
        <Title title="Existing Member" />
        <Form>
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
                 name="password"
                 value={password} 
            />
          <Button text="Login" />
        </Form>
    </SigninContainer>

}