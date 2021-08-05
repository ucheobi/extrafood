import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import  Extralogo  from "../../../../assets/images/extralogo.png";

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
        ml-5
    `}
`;

const LogoText = styled.div`
    ${tw`
      text-xl
      font-bold
      capitalize
    `}
`;

const Image = styled.div`
    width: auto;
    ${tw`
        h-5
        w-5
    `}

    img {
        width: auto;
        height: 100%;
    }
`;


export const Logo = () => {
    return <LogoContainer>
        <Image>
            <img src={Extralogo} alt="Extra Food logo" />
        </Image>
        <LogoText>extrafood</LogoText>
    </LogoContainer>
}