import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IButton } from "../../../types/account";
import { ModalCtx } from "../../contextAPI";

interface IButtonProp extends IButton {}

const LoginButton = styled.button`
    ${tw`
        w-full
        pl-6
        pr-6
        pt-2
        pb-2
        bg-black
        cursor-pointer
        text-center
        hover:bg-gray-500
    `}
`;

const LoginText = styled.span`
    font-size: 16px;
    ${tw`
        font-semibold
        text-white
    `}
`;

export const Login = ({ text }: IButtonProp) => {

    const login = React.useContext(ModalCtx);

    return <LoginButton onClick={ login.handleOpenModal } >
        <LoginText>{text}</LoginText>
    </LoginButton>
}