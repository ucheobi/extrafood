import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Cover } from "../../components/cover";
import { Header } from "../../components/header";
import { Navbar } from "../../components/navbar";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        items-center
        overflow-x-hidden
    `}
`

export const HomePage = () => {
    return <PageContainer>
        <Header />
        <Navbar />
        <Cover />
    </PageContainer>
}