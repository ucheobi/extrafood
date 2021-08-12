import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ModalCtx } from "../../../../contextAPI";

const CloseBtnContainer = styled.div`
    right: 25%;
    ${tw`
        cursor-pointer
        z-20
        absolute
        top-11
    `}
`;

const TextBtn = styled.span`
    &:hover {
        color: #080807;
    }
    ${tw`
        text-red-900
        font-sans
        text-4xl
    `}
`;

export const CloseButton = () => {

    const modalContext = React.useContext(ModalCtx);

   return  (
    <CloseBtnContainer onClick={modalContext.handleCloseModal}>
        <TextBtn>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </TextBtn>
    </CloseBtnContainer>)
}