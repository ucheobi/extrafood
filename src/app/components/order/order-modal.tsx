import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { CloseOrder } from "./close-order";
import { OrderButton } from "./order-button";
import { OrderForm } from "./order-form";
import { Quantity } from "./quantity";
import { SpecialInfo } from "./special-order";
import { AccountProps } from "../../../types/account";
import { MenuCtx } from "../../contextAPI";

const OrderModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #e6d3d3c3;
    display: ${({ show }: AccountProps) => show || "none" };
    ${tw`
        fixed
        items-center
    `}
`;

const OrderContainer = styled.div`
    width: 49%;
    height: 46em;
    top: 0.6em;
    left: 50%;
    background-color: #dfd3c1df;
    ${tw`
        absolute   
        overflow-auto
        p-4
        border
    `}
`;

const OrderDescription = styled.div`
    font-size: 10px;
    ${tw`
        font-sans
        font-bold
    `}
`;


const FormContainer = styled.form`
    ${tw`
        w-full
        flex
        flex-col
    `}
`;

const InputLabel = styled.label`
    width: fit-content;
    ${tw`
        font-sans
        text-xs
        text-black
        font-bold
        mt-4
        mb-2
    `}
`;


const OrderBTN = styled.div`
    ${tw`
        flex
        flex-col
        justify-end
        mb-3
        mt-6
        pb-3
    `}
`;

export const OrderModal = () => {

    const { showMenu } = React.useContext(MenuCtx);

    return <OrderModalContainer show={showMenu}>
        <OrderContainer>
            <OrderDescription>Our classic cheese burger is 100% beef patty, a slice of Jack cheese, diced red onions, pickles, mustard and lots of ketchups.</OrderDescription>
            <FormContainer>
                <InputLabel>Size</InputLabel>
                <OrderForm 
                    type="checkbox"
                    text="Size"
                    id="size"
                    name="size"
                    value="Burger Only"
                    price={0}
                />
                <OrderForm 
                    type="checkbox"
                    text="Size"
                    id="size"
                    name="size"
                    value="Meal Deal"
                    price={2.50}
                />

                <InputLabel>Customize your Burger</InputLabel>
                <OrderForm 
                    type="checkbox"
                    text="Size"
                    id="size"
                    name="size"
                    value="red onions"
                    price={0.50}
                />
                <OrderForm 
                    type="checkbox"
                    text="Size"
                    id="size"
                    name="size"
                    value="mixed pepper"
                    price={0.50}
                />
                <OrderForm 
                    type="checkbox"
                    text="Size"
                    id="size"
                    name="size"
                    value="cheese"
                    price={0.50}
                />
                <OrderForm 
                    type="checkbox"
                    text="Size"
                    id="size"
                    name="size"
                    value="picked red cabbage"
                    price={0.50}
                />
                <OrderForm 
                    type="checkbox"
                    text="Size"
                    id="size"
                    name="size"
                    value="beef tomatoes"
                    price={0.50}
                />
    
                <InputLabel>More Information</InputLabel>
                <SpecialInfo info="" />

                <InputLabel>Quantity</InputLabel>
                <Quantity quantity={1} />

                <OrderBTN>
                    <OrderButton text="Add to cart" bgcolor="#2ea004" total={8.50} />
                    <OrderButton text="Order Now" bgcolor="#f16508" total={8.50} />
                </OrderBTN>
            </FormContainer>
        </OrderContainer>
        <CloseOrder />
    </OrderModalContainer>
}