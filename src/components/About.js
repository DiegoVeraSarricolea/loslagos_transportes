import React from 'react';
import MySwipeableViews from './MySwipeableViews';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    card: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  }));


export default function About() {
    const classes = useStyles();
    
    return (
        <div>
            <MySwipeableViews />
            <Container maxWidth="lg" className={classes.root}>
            <Typography variant="h4" component="h1" gutterBottom>
                Acerca de Nosotros
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Quienes Somos
                    </Typography>
                    <Typography variant="body1" component="p">
                        Somos una empresa de transporte de pasajeros en la región de Los Lagos, hacemos recorridos al Aeropuerto, Puerto Varas e incluso hacemos viajes personalizados a regiones adyacentes.
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Misión
                    </Typography>
                    <Typography variant="body1" component="p">
                        Nuestra misión como empresa es otorgar un servicio de transporte que jamás vaya a olvidar, brindándole la mayor comodidad posible a usted y a sus acompañantes. Respetando siempre la puntualidad. 
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
}



