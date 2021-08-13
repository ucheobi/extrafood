import React, { FunctionComponent } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {  ModalProps } from "../../../../../types/account";
import { ModalCtx } from "../../../../contextAPI";

const ModalCover = styled.div`
    width: 100%;
    height: 100%;
    background-color: #302b2ba2;
    display: ${({ showItem }: ModalProps) => showItem || "none" };
    ${tw`
        fixed
        items-center
    `}
`;

export const ModalContainer: FunctionComponent = ({ children }) => {
    const modalContext = React.useContext(ModalCtx);

    return <ModalCover showItem={modalContext.showModal} >
        {children}
    </ModalCover>
}
