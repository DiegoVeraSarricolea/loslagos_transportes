import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';


const footers = [
    {
      title: 'Conductores',
      description: ['Karina Vera', 'Patricio Lara'],
    },
    {
      title: 'Oficina',
      description: ['Isla San Ambrosio 6484 Puerta Sur', 'Puerto Montt',],
    },
  ];

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Transportes Los Lagos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer () {
    return (
        <div>
        <Container
            maxWidth="md"
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
            }}
        >
            <Grid container spacing={4} justifyContent="space-evenly">
                {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                    {footer.title}
                </Typography>
                <ul>
                    {footer.description.map((item) => (
                    <li key={item}>
                        <Link href="#" variant="subtitle1" color="text.secondary">
                        {item}
                        </Link>
                    </li>
                    ))}
                </ul>
                </Grid>
            ))}
            </Grid>
            <Copyright sx={{ mt: 5 }} />
        </Container>
        </div>
    );
}

