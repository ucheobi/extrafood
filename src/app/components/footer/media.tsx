import { faCcMastercard, faCcPaypal, faCcVisa, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FooterTitles } from "./footer-title";

const MediaContainer = styled.div`
    ${tw`
        text-red-50
    `}
`;

const SocialContainer = styled.div`
    ${tw`
        flex
        flex-row
        justify-between
        mr-1
        mb-1
    `}
`;

const Payments = styled.div`
    ${tw`
        flex
        justify-between
        text-sm
    `}
`;

const Icon = styled.span`
    ${tw`
        text-white
        fill-current
        text-sm
        cursor-pointer
        hover:text-yellow-500
    `}
`;

export const Media = () => {
    return <MediaContainer>
        <FooterTitles title="follow us" />
        <SocialContainer>
            <Icon>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </Icon>
        </SocialContainer>
        <Payments>
        <Icon>
                <FontAwesomeIcon icon={faCcVisa}></FontAwesomeIcon>
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faCcMastercard}></FontAwesomeIcon>
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faCcPaypal}></FontAwesomeIcon>
            </Icon>
        </Payments>
    </MediaContainer>
}