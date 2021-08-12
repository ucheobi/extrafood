export interface AccountProps {
    show: string;
};

export interface ModalProps {
    showItem: string;
}

export interface MouseHandler {
    MouseEvent: (e: React.MouseEvent) => void;
}

export interface ClickHandler {
    ClickEvent: (e: React.SyntheticEvent) => void;
}

export interface IButton {
    text: string;
} 

export interface IForm {
    type: string;
    text: string;
    id: string;
    name: string;
    value: string;
    handler?: (e: React.SyntheticEvent) =>  void;
}
