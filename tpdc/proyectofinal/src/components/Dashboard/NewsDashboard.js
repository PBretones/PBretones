import '../../styles/styles.scss';
import { Button, Card, Paper, Typography, CardContent, CardActions } from '@material-ui/core';
import React from "react";

export const NewsDashboard = () => {
    return (
        <div className="newsDashboard">
            <div className="newsInfo">
                <div className="newsTitle"><span><h1>GANADORES DEL COAC 2020</h1></span></div>
                <span className="newsText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare libero mi, eget pharetra nibh lacinia at. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Donec mi sapien, pellentesque ac diam quis, porttitor sodales ante. Sed vitae porttitor quam. Sed aliquet blandit est vitae vehicula. Pellentesque vitae faucibus dolor.</span>
                <span className="newsHeader"><h4>Free, Help Yourself</h4></span>
                <span className="newsText"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam rerum quas rem facilis nesciunt. Veritatis nisi tenetur fuga, libero cupiditate deserunt distinctio! Suscipit tempora praesentium similique laboriosam magnam impedit tempore iste harum, dicta deserunt et laborum nihil ratione, aperiam totam ipsam magni dolore enim voluptatem illum. Optio autem voluptatum tempora. Duis non turpis placerat, blandit neque ac, convallis erat. Duis lacinia elit non augue pellentesque, nec suscipit orci iaculis. Donec ut mauris ligula. Nulla sed ante orci. Nulla sit amet est luctus, maximus lorem varius, fringilla turpis. Nulla vel mollis enim, in suscipit nisi. Suspendisse potenti. Nunc non lorem sit amet ex dapibus varius id vitae lorem.</span>
                <Button className="newsButton">CONTINUAR...</Button>
            </div>
            <div className="newsPicture"></div>
        </div>
    )

}

