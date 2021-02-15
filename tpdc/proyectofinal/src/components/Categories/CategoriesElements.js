import "../../styles.css";
import React from "react";
import { Button, Card, Paper, Typography, CardContent, CardActions } from '@material-ui/core';



export const CategoriesElements = ({ image, children }) => {

    return (
        <>
            <div >
                <Card>
                    <CardContent>{image}</CardContent>
                    <CardActions>
                        <Button>{children}</Button>
                    </CardActions>
                </Card>
            </div >
        </>
    )
}
