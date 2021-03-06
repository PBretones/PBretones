import '../../styles/styles.scss';
import { Pagination } from '@material-ui/lab';
import { ThemeProvider } from '@material-ui/styles';
import React from "react";
import { NewsDashboard } from './NewsDashboard';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "white",

        }
    }
}));

export const Dashboard = () => {
    const classes = useStyles();
    return (
        <div className="news">
            <Pagination className="newsPagination" count={5} color="primary" variant="outlined" shape="rounded" classes={{ ul: classes.ul }} />
            <NewsDashboard />
        </div>
    )
}

