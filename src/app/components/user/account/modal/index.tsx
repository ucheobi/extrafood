import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Account } from "..";
import { CloseButton } from "./close-btn";
import { ModalContainer } from "./modal-container";


const MainModal = styled.section`
    width: 40%;
    height: 95%;
    top: 1em;
    ${tw`
        relative
        bg-white     
        translate-y-1/2
        translate-x-1/2
        max-h-screen
        overflow-auto
        mr-auto
        ml-auto
    `}
`;

export const Modal = () => {

    return (
        <ModalContainer>
            <CloseButton />
            <MainModal>
                <Account />
            </MainModal>
        </ModalContainer>
    )
}