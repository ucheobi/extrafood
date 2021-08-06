import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IFooter {
    title: string;
}

interface IFooterProps extends IFooter {}

const Title = styled.h3`
    font-size: small;
    ${tw`
        uppercase
        font-bold
        mb-2
        text-yellow-500
    `}
`;

export const FooterTitles = (props: IFooterProps) => {
    return <Title>
        {props.title}
    </Title>
}