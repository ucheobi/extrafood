import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FooterTitles } from "./footer-title";

const AddressContainer = styled.div`
    ${tw`
        text-red-50
    `}
`;

const TextContainer = styled.div`
    font-size: 11px;
    ${tw`
        font-light
        mr-3
    `}
`;

const CompanyAddress1 = styled.p``;

const CompanyAddress2 = styled.p`
    ${tw`
        ml-5
        mb-1
    `}
`;

const Phone = styled.p`
    ${tw`
        mb-1
    `}
`;

const Email = styled.p``;

const Icon = styled.span`
    ${tw`
        text-white
        fill-current
        text-xs
        mr-2
    `}
`;

export const Address = () => {
    return <AddressContainer>
        <FooterTitles title="store details" />
        <TextContainer>
            <CompanyAddress1>
                <Icon>
                    <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                </Icon>Address: 28, Dusternbrooker Weg, 
            </CompanyAddress1>
            <CompanyAddress2>24105 Kiel Germany.</CompanyAddress2>
            <Phone>
                <Icon>
                    <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                </Icon>Call Us: +49 (0) 176-476-0-0839
            </Phone>
            <Email>
                <Icon>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </Icon>Email: uche.anota@yahoo.com</Email>
        </TextContainer>
    </AddressContainer>
}