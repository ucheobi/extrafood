import React, { FunctionComponent } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AccountProps } from "../../../types/account";
import { AccountCtx } from "../../contextAPI";



const Dropdown = styled.div`
    min-height: 20em;
    min-width: 250%;
    display: ${({ show }: AccountProps) => show || "none" };
    ${tw`
        bg-white
        border
        border-gray-400
        absolute
        right--0.5
        z-10
        top-6
        p-2
        justify-items-start
    `}
`;

export const DropdownContainer: FunctionComponent = ({ children }) => {

    const { showUser } = React.useContext(AccountCtx)

    return <Dropdown show={showUser}>
        {children}
    </Dropdown>
}

