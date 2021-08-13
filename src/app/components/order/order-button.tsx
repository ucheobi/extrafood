import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


interface OrderProps {
    total?: number;
    text: string;
    bgcolor: string;
}

type ColorProps = {
    color: string;
}

const OrderBtn = styled.button`
    background-color: ${({ color }: ColorProps) => color};
    color: #f0e6dd;
    width: 90%;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    ${tw`
        p-1
        flex
        flex-row
        justify-between
        mr-auto
        ml-auto
        rounded
        mt-3
        font-bold
    `}
`;

const OrderText = styled.span`
    ${tw`
        ml-20
    `}
`;

const OrderPrice = styled.span`
    ${tw`
        pr-3
    `}
`;

export const OrderButton = ({ total, text, bgcolor }: OrderProps) => {
    return <OrderBtn color={bgcolor}>
        <OrderText>{text}</OrderText>
        <OrderPrice>Total: ${total}</OrderPrice>
    </OrderBtn>
}