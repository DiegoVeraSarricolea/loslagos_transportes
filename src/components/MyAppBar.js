import * as React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

export default function MyAppBar() {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
            <img alt="logo" width={86} height={57} src="../../transloslagos.png" />
            <Typography variant="h6" color="inherit" align='left' paddingLeft={1} noWrap sx={{ flexGrow: 1 }}>

            </Typography>
            <nav>
                <Link
                variant="button"
                color="text.primary"
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
