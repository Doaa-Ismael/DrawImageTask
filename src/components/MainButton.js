import {Button, } from "react-bootstrap";
import React from "react";

const MainButton = ({title, id, onClick, active}) => {
    return (
        <Button variant="primary" data-testid={id} onClick={() => onClick() } active={active} >{title}</Button>
    )
};


export default MainButton;
