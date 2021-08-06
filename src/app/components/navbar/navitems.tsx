import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ItemContainer = styled.ul`
 
    ${tw`
        flex
        list-none
        min-w-full
        justify-end
    `}
`

const NavItem = styled.li`
    color: #ff3c00;
    &:hover {
        background-color: #f75211;
        color: #ffffff;
    }
    ${tw`
        text-sm
        font-semibold
        cursor-pointer
        transition
        duration-300
        ease-in-out
        pt-1
        pb-1
        pr-5
        pl-5
    `}
`

export const NavItems = () => {
    return <ItemContainer>
        <NavItem>
           <a href="#">Home</a> 
        </NavItem>
        <NavItem>
           <a href="#">About Us</a> 
        </NavItem>
        <NavItem>
           <a href="#">Menu</a> 
        </NavItem>
        <NavItem>
           <a href="#">Services</a> 
        </NavItem>
        <NavItem>
           <a href="#">Reservations</a> 
        </NavItem>
        <NavItem>
           <a href="#">Contact Us</a> 
        </NavItem>
    </ItemContainer>
}