import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface QuantityProps {
    quantity: number;
}

const InputContainer = styled.div`
    height: 1.5em;
    ${tw`
        flex
        flex-row
        mb-3
    `}
`;

const Input = styled.input`
    ${tw`
        p-1
        w-full
        border
        border-gray-200
    `}
`;

const Icon = styled.span`
    background-color: #272626;
    margin-right: 2px;
    height: 2em;
    width: 2em;
    ${tw`
        fill-current
        text-xs
        text-center
        text-white
        p-1
        cursor-pointer
        hover:bg-gray-500
    `}
`;

export const Quantity = ({ quantity }: QuantityProps) => {
    return <InputContainer>
        <Input type="number" value={quantity} />
        <Icon>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </Icon>
        <Icon>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Icon>
    </InputContainer>
}