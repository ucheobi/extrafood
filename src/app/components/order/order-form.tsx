import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IForm } from "../../../types/account";

interface IFormProps extends IForm {
    price: number;
}

const InputContainer = styled.section`
    ${tw`
        flex
        flex-col
        w-full
        mb-0
    `}
`;


const InputRadio = styled.input`
    ${tw`
        border
        bg-gray-300
        border-gray-300
    `}
`;

const RadioText = styled.span`
    width: fit-content;
    ${tw`
        ml-2
        text-xs
    `}
`;

const RadioContainer = styled.div`
    background-color: #beb6b6ea;
    :hover {
        background-color: #a19b9be0;
    }
    ${tw`
        flex-row
        flex
        border
        border-gray-200
        p-2
        cursor-pointer
        text-center
        justify-between
    `}
`;

const Price = styled.span`
    font-size: 9px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    ${tw`

    `}
`;

const Container = styled.span`
    font-size: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    ${tw`

    `}
`;

export const OrderForm = ({ type, text, price, id, name, value, handler }:IFormProps) => {
    return <InputContainer>
        <RadioContainer>
            <Container>
                <InputRadio 
                    type={type} 
                    id={id}
                    name={name}
                    onChange={handler}
                    value={value}
                />
                <RadioText>{value}</RadioText>
            </Container>
            <Price>+{price}</Price>
        </RadioContainer>
    </InputContainer>
}
