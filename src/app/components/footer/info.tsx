import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FooterTitles } from "./footer-title";

const InfoContainer = styled.div`
    ${tw`
        text-red-50
    `}
`;

const ListItems = styled.ul``;

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

export const Info = () => {
    return <InfoContainer>
        <FooterTitles title="information" />
        <ListItems>
            <Items>About Us</Items>
            <Items>Services</Items>
            <Items>Return Policy</Items>
            <Items>Terms and Conditions</Items>
        </ListItems>
    </InfoContainer>
}