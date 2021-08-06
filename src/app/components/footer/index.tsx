import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Account } from "./account";
import { Address } from "./address";
import { Info } from "./info";
import { Media } from "./media";
import { OpeningHours } from "./opening-hours";

const FooterContainer = styled.div`
    min-height: 10em;
    background-color: #882802;
    ${tw`
        flex
        justify-between
        min-w-full
        border-t
        border-gray-100
        p-5
    `}
`;

export const Footer = () => {
    return <FooterContainer>
        <Address />
        <Info />
        <Account />
        <OpeningHours />
        <Media />
    </FooterContainer>
}