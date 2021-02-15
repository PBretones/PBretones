import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles.css";
import React from "react";
import { Button, Card, Paper, Typography, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export const CategoriesElements = ({ image, children }) => {


    return (
        <>
            <div className="children">
                <Card variant="outlined">
                    <CardContent>{image}</CardContent>
                    <CardActions>
                        <Button size="small">{children}</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}
