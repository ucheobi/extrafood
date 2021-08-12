import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AccountCtx} from "../../contextAPI";
import { Dropdown } from "./dropdown"; 

const UserContainer = styled.div`
    ${tw`
        relative
        pr-2
        pl-2
        hover:border-t
        hover:border-r
        hover:border-l 
        hover:border-gray-400
        mr-4
        cursor-pointer
    `}
`;

const UserText = styled.span`
    ${tw`
        text-black
        text-sm
        cursor-pointer
        font-semibold
    `}
`;

const Icon = styled.span`
    ${tw`
        fill-current
        text-sm
        mr-1
        cursor-pointer
    `}
`;

export const User = () => {

    const userData = useContext(AccountCtx)
    
    return (
        <UserContainer 
            onMouseOver={userData.handleShow} 
            onMouseOut={userData.handleClose}
        >
            <UserText>
                <Icon>
                    <FontAwesomeIcon icon={faUser} ></FontAwesomeIcon>
                </Icon>
                Account
            </UserText>
            <Dropdown />
        </UserContainer>
    )
}