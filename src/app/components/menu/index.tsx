import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IMenu } from "../../../types/menu";
import { MenuCtx } from "../../contextAPI";

interface IMenuProps extends IMenu {}

const MenuContainer = styled.div`
    width: 100%;
    ${tw`
        flex
        pl-3
        pr-3
        justify-between
    `}
`;

const Image = styled.div`
    width: 50%;
    height: 20px;
    ${tw`
        mt-2
    `}
`;

const NamePrice = styled.div`
    ${tw`
        flex
        justify-between     
    `}
`;

const Name = styled.h3`
    color: #222222;
    ${tw`
        font-bold
        text-xs
    `}
`;

const Price = styled.h3`
    color: #222222;
    ${tw`
        font-bold
    `}
`;

const Description = styled.p`
    ${tw`
        text-xs
        font-light
    `}
`;

const MenuItem = styled.div`
    width: 48%;
    ${tw`
        p-1
        border-gray-100
        border-t
        border-b
        hover:bg-gray-100
        cursor-pointer
    `}
`;

export const Menus = (props: IMenuProps) => {
    const {  name, description, price, imageUrl } = props;

    const menuContext = React.useContext(MenuCtx);

    return <MenuContainer>
        <MenuItem onClick={menuContext.handleOpenMenu}>
            <NamePrice>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </NamePrice>
            <Description>{description}</Description>
        </MenuItem>

        <Image>
            <img src={imageUrl} alt="" />
        </Image>
    </MenuContainer>
}