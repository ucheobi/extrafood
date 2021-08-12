import * as React from "react";

export interface AccountContextInterface {   
    showUser: string; 
    handleShow: (e: React.SyntheticEvent) =>  void;
    handleClose: (e: React.SyntheticEvent) =>  void;
}

export interface ModalContextInterface {
    showModal: string;
    handleOpenModal: (e: React.SyntheticEvent) =>  void;
    handleCloseModal: (e: React.SyntheticEvent) =>  void;
}

export const AccountCtx = React.createContext<AccountContextInterface>({
    showUser: "none",
    handleShow: () => null,
    handleClose: () => null
});

export const ModalCtx = React.createContext<ModalContextInterface>({
    showModal: "",
    handleOpenModal: () => null,
    handleCloseModal: () => null
});


