import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IMenuCategory } from "../../../types/menu";

interface IMenuCategoryProps extends IMenuCategory {}

const MenuCategory = styled.h1`
    ${tw`
        font-bold
        mb-2
        mt-2
        ml-3
        uppercase
    `}
`;

export const MenuTitle = (props: IMenuCategoryProps ) => {
    return <MenuCategory>
        {props.title}
    </MenuCategory>
}