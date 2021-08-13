import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Cover } from "../../components/cover";
import { Header } from "../../components/header";
import { Navbar } from "../../components/navbar";
import { MenuContent } from "../../components/menu/menu";
import { Footer } from "../../components/footer";
import { Modal } from "../../components/user/account/modal";
import { AccountCtx, MenuCtx, ModalCtx } from "../../contextAPI";
import { OrderModal } from "../../components/order/order-modal";

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

    const [showUser, setShowUser ] = useState("none");
    const [ showModal, setShowModal ] = useState("")
    const [showMenu, setShowMenu] = useState("");

    const handleShow = () => {
        setShowUser("block")
    }

    const handleClose = () => {    
        setShowUser("none")
    }

    const handleCloseModal = (ev:any) => {
        ev.preventDefault();
        setShowModal("none")
    }

    const handleOpenModal = (ev:any) => {
        ev.preventDefault();
        setShowModal("block");
        setShowUser("none")
    }

    const handleCloseMenu = () => {    
        setShowMenu("none")
    }

    const handleOpenMenu = () => {    
        setShowMenu("block")
    }


    return <ModalCtx.Provider value={{ showModal, handleCloseModal, handleOpenModal}}>
        <AccountCtx.Provider value={{ showUser, handleShow, handleClose}}>
            <MenuCtx.Provider value={{ showMenu, handleOpenMenu, handleCloseMenu }}>
                <PageContainer>
                    <Header />
                    <Navbar />
                    <Cover />
                    <Modal />
                    <MenuContent />
                    <OrderModal />
                    <Footer />
                </PageContainer>
            </MenuCtx.Provider>
        </AccountCtx.Provider>
    </ModalCtx.Provider>
}