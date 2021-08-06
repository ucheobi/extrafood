import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FooterTitles } from "./footer-title";

const HoursContainer = styled.div`
    ${tw`
        text-red-50
    `}
`;

const OpeningDays = styled.div`
    font-size: 11px;
    ${tw`
        font-light
        mb-2
    `}
`;

export const OpeningHours = () => {
    return <HoursContainer>
        <FooterTitles title="opening hours" />
        <OpeningDays>Monday-Friday: 7AM-11PM</OpeningDays>
        <OpeningDays>Saturday: 9AM-11PM</OpeningDays>
        <OpeningDays>Sunday: 11AM-11PM</OpeningDays>
    </HoursContainer>
} 