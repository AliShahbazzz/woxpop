import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './footer.css';

function Copyright() {
    return (
        <Typography variant="body2">
            {'Copyright © '}
            <Link color="inherit">
                woxpop.com
      </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "museo-sans sans-serif",
    },
    footer: {
        padding: theme.spacing(2, 2),
        marginTop: 'auto',
        backgroundColor: '#000',
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root} style={styles.root}>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Woxpop</Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}

let styles = {
    root: {
        color: 'white'
    }
}