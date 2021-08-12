import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CartContainer = styled.div`
    ${tw`
        w-20
        mr-3
        text-center
        text-xs
        font-semibold
    `}
`

export const Cart = () => {
    return <CartContainer>Cart Items</CartContainer>
} 