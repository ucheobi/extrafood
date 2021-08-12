import {  faEnvelope, faHeart, faSignOutAlt, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { Login } from "./login";
import { DropdownContainer } from "./dropdown-container";


const DropdownMenu = styled.ul``;

const DropdownList = styled.li`   
    ${tw`
        flex
        justify-start
        mb-4
        hover:text-red-700
    `}
`;

const Register = styled.span`
    ${tw`
        font-semibold
        text-red-700
        border-b
        cursor-pointer
        pb-2
    `}
`;

const Icon = styled.span`
    ${tw`
        fill-current
        mr-2
        cursor-pointer
    `}
`;

const Link = styled.a`
    ${tw` 
        cursor-pointer
        ml-2
    `}
`;

export const Dropdown = () => {

    return <DropdownContainer>
        <DropdownMenu>
            <DropdownList><Login text="Login" /></DropdownList>
            <DropdownList><Register>Register Here</Register></DropdownList>
            <DropdownList>
                <Link>
                    <Icon>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </Icon>
                    Profile
                </Link>
            </DropdownList>
            <DropdownList>
                <Link>
                    <Icon>
                        <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
                    </Icon>
                    Orders</Link>
            </DropdownList>
            <DropdownList>
                <Link>
                    <Icon>
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </Icon>
                    Favourite</Link>
            </DropdownList>
            <DropdownList>
                <Link>
                    <Icon>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </Icon>
                    Messages</Link>
            </DropdownList>
            <DropdownList>
                <Link>
                    <Icon>
                        <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
                    </Icon>
                    Signout</Link>
            </DropdownList>
        </DropdownMenu>
    </DropdownContainer>
}