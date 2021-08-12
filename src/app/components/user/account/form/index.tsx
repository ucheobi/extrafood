import React, { FunctionComponent } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FormContainer = styled.form`
    ${tw`
        flex
        flex-col
        justify-between
        w-10/12
        m-4
        mr-auto
        ml-auto
    `}
`;

export const Form: FunctionComponent = ({ children }) => {
    return <FormContainer>
        {children}
    </FormContainer>
}