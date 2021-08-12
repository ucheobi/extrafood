import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

type TitleProps = {
    title: string;
}

const LoginTitle = styled.h3`
    ${tw`
        font-bold
        text-black
        text-center
        border-gray-500
        border-b
        pb-2
    `}
`;

export const Title = ({ title }: TitleProps) => (
    <LoginTitle>{ title }</LoginTitle>
)