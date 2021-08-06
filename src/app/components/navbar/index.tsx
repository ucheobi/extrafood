import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavItems } from "./navitems";

const NavbarContainer = styled.div`
    background-color: #8ad824ce;
    ${tw`
        flex  
        w-full 
        flex-row 
        lg:pl-12
        lg:pr-12 
    `}
`

export const Navbar = () => {
    return <NavbarContainer>
        <NavItems />
    </NavbarContainer>
}