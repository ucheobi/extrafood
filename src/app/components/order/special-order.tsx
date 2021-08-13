import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

type SpecialProps = {
    info: string;
} 

const AdditionalInfo = styled.textarea`
    font-size: 8px;
    height: 10em;
    font-family: Verdana, "Geneva", Tahoma, sans-serif;
    ${tw`
        w-full
        text-gray-700
        block
        mt-1
        p-2
        border-gray-200
        border
    `}
`;

export const SpecialInfo = ({ info }: SpecialProps) => {
    return <AdditionalInfo placeholder="Example: No sugar / pepper / salt ?">{info}</AdditionalInfo>
}