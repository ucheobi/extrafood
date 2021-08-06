import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Line = styled.hr`
    color: #a08971;
    ${tw`
        w-full
    `}
`;

export const MenuLine = () => {
    return <Line />
}