import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IForm } from "../../../../../types/account";

interface IFormProps extends IForm {}

const InputContainer = styled.section`
    ${tw`
        flex
        flex-col
        justify-between
        w-full
        mb-0
    `}
`;

const InputLabel = styled.label`
    ${tw`
        font-sans
        text-xs
        text-black
        font-bold
        m-1
        text-left
        flex
        flex-col
        float-left
        justify-items-start
    `}
`;

const InputText = styled.input`
    height: 2em;
    ${tw`
        p-2
        w-full
        mb-1
        border
        bg-gray-300
        border-gray-300
        font-normal
        text-sm
        text-black
        rounded
    `}
`;

export const Input = ({ type, text, id, name, value, handler }:IFormProps) => {
    return <InputContainer>
        <InputLabel>{text}</InputLabel>
        <InputText 
            type={type} 
            id={id}
            name={name}
            onChange={handler}
            value={value}
        />

    </InputContainer>
}