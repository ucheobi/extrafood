import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Steak from "../../../assets/images/steak-food-custom2.jpg"

const CoverContainer = styled.div`
    background: url(${Steak});
    background-size: cover;
    height: 400px;
    ${tw`
        flex
        w-screen
        flex-col
        items-center      
    `}
`;

const TitleHead = styled.h3`
    color: #ff8000;
    ${tw`
        font-playfair
        font-semibold
    `}
`;

const Title = styled.h1`
    ${tw`
        font-garabond
        text-white
        mt-1
        mb-4
        text-5xl
        font-extrabold
    `}
`;

const Description = styled.p`
    ${tw`
        text-red-100
        font-normal
        text-base
        font-monteCarlo
    `}
`;

const Content = styled.div`
    ${tw`
        top-1/3
        flex
        flex-col
        justify-center
        w-2/4
        absolute
        items-center
        text-center
        mt-8
        space-x-8       
    `}
`;

export const Cover = () => {
    return <CoverContainer> 
        <Content>
            <TitleHead>Enjoy the Extraordinary Cousine</TitleHead>
            <Title>Steaks &amp; Burger</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</Description>
        </Content>
        
    </CoverContainer>
}