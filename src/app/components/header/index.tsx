import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { User } from "../user";
import { Cart } from "./cartItems";
import { Logo } from "./logo";

const HeaderContainer = styled.div`
    min-height: 70px;
    ${tw`
        flex
        items-center
        justify-between
        w-full
        ml-1
        mr-1
    `}
`;

const UserCartContainer = styled.div`
    ${tw`
        flex
        justify-between
        text-center
        mr-3
    `}
`;

export const Header = () => {

    return (   
        <HeaderContainer>
            <Logo />
            <UserCartContainer>
                <User /> 
                <Cart /> 
            </UserCartContainer>   
        </HeaderContainer>
    )
}