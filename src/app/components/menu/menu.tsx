import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Menus } from ".";
import Burger from "../../../assets/images/burger_600_150.jpg";
import Salad from "../../../assets/images/greek_salad.jpg";
import Steak from "../../../assets/images/steak_600_150.jpg";

import { MenuTitle } from "./menu-category";

const MenuContentContainer = styled.div`
    ${tw`
        mb-5
    `}
`;

export const MenuContent = () => {
    return <>
        <MenuContentContainer>
            <MenuTitle title="burgers" />
            <Menus 
                name="Classic Burger"
                price={5.50}
                description="Our classic burger is a slice of cheese, beef, tomato, lettuce, crimpsy, red onion and burger sauce."
                imageUrl={Burger}
            />
            <Menus 
                name="Chesseburger"
                price={5.00}
                description="Our classic cheese burger is 100% beef patty, a slice of Jack cheese, diced red onions, pickles, mustard and lots of ketchups."
            />
        </MenuContentContainer>

        <MenuContentContainer>
            <MenuTitle title="salads" />
            <Menus 
                name="Broccoli Apple Salad"
                price={4.00}
                description="Awesome mixture of broccoli, red onions, apples, carrots and dried cranberries."
                imageUrl={Salad}
            />
            <Menus 
                name="Greek Salad"
                price={4.50}
                description="Customers favourite Greek salad with sliced cucumber, tomatoes, sliced red onions, green pepper, olives and feta cheese."
            />
        </MenuContentContainer> 

        <MenuContentContainer>
            <MenuTitle title="steaks" />
            <Menus 
                name="Filet Mignon"
                price={8.50}
                description="Our classic burger is a slice of cheese, beef, tomato, lettuce, crimpsy, red onion and burger sauce."
                imageUrl={Steak}
            />
            <Menus 
                name="Flank Steak"
                price={9.50}
                description="Our classic burger is a slice of cheese, beef, tomato, lettuce, crimpsy, red onion and burger sauce."
            />
        </MenuContentContainer>           
    </>        
}