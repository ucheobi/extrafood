import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Signin } from "./signin";
import { Signup } from "./signup";

const AccountContainer = styled.div`
    ${tw`

    `}
`;

const Line = styled.hr`
    ${tw`
        mt-6
        mb-6
        ml-0.5
        mr-0.5
    `}
`

export const Account = () => {
    return <AccountContainer>
        <Signin />
        <Line />
        <Signup />
    </AccountContainer>
}