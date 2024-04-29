import * as React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

export default function MyAppBar() {
    return (
        <AppBar
            position="static"
            color="primary"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Link variant="button" href="/">
                <img alt="logo" width={86} height={57} src="../../transloslagos.png" />
                </Link>
            <Typography variant="h6" color="inherit" align='left' paddingLeft={1} noWrap sx={{ flexGrow: 1 }}>

            </Typography>
            <nav>
                <Link
                variant="button"
                color="inherit"
                href="/nosotros"
                sx={{ my: 1, mx: 1.5 }}
                >
                Nosotros
                </Link>
            </nav>
            </Toolbar>
        </AppBar>
    );
}
