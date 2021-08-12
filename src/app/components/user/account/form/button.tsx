import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IButton } from "../../../../../types/account"; 

interface IButtonProps extends IButton {}

const ButtonContainer = styled.button`
    ${tw`
        pt-2
        pb-2
        pr-3
        pl-3
        mt-5
        bg-black
        text-white
        text-lg
        cursor-pointer
        w-full
        rounded
        hover:bg-gray-700
    `}
`;

export const Button = ({ text }: IButtonProps) => {
    return <ButtonContainer type="button" >
        {text}
    </ButtonContainer>
}