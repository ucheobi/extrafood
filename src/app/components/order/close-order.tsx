import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { MenuCtx } from "../../contextAPI";

const CloseBtnContainer = styled.div`
    right: 1%;
    ${tw`
        cursor-pointer
        z-20
        absolute
    `}
`;

const TextBtn = styled.span`
    &:hover {
        color: #080807;
    }
    ${tw`
        text-gray-900
        font-sans
        text-sm
    `}
`;

export const CloseOrder = () => {

    const menuContext = React.useContext(MenuCtx);

    return <CloseBtnContainer onClick={menuContext.handleCloseMenu}>
        <TextBtn>
            <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
        </TextBtn>
    </CloseBtnContainer>
}