import "../../styles/styles.scss";
import React from "react";
import { Button, Card, Paper, Typography, CardContent, CardActions } from '@material-ui/core';



export const CategoriesElements = ({ image, children }) => {
    const test = () => {
        alert("hey");
    }

    return (
        <div className="myCard" onClick={test}>
            <div className="cardImage"><div className="cardRadius">{image}</div></div>
            <div className="cardText"><span>{children}</span></div>
        </div>
    )
}
