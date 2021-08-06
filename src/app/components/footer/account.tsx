import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FooterTitles } from "./footer-title";

const AccountContainer = styled.div`
    ${tw`
        text-red-50
    `}
`;

const ListItems = styled.ul`
    ${tw`
    `}
`;

const Items = styled.li`
    font-size: 11px;
    ${tw`
        mb-1
        cursor-pointer
        hover:text-yellow-500
        list-disc
        ml-4
    `}
`;

export const Account = () => {
    return <AccountContainer>
        <FooterTitles title="account" />
        <ListItems>
            <Items>Orders</Items>
            <Items>Returns</Items>
            <Items>Support</Items>
            <Items>My Profile</Items>
        </ListItems>
    </AccountContainer>
}