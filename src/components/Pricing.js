import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import WhatsAppContact from './WhatsAppContact';



const tiers = [
  {
    title: 'Cotizar',
    price: '0',
    description: [
      'Planifica tu viaje',
      'en la región de Los',
      'Lagos, hasta 11',
      'personas',
    ],
    buttonText: 'Contacta para cotizar',
    buttonVariant: 'outlined',
  },
  {
    title: 'Aeropuerto',
    subheader: 'Mas solicitado',
    price: '12.000',
    description: [
      'Te llevamos desde',
      'cualquier parte de',
      'Puerto Montt al Aeropuerto,',
      'agendando tu hora de vuelo',
    ],
    buttonText: 'CONTACTA YA!',
    buttonVariant: 'contained',
  },
  {
    title: 'Reserva VAN',
    price: '36.000',
    description: [
      'Reserva un trayecto solo',
      'para ti y tus amigos',
      'al Aeropuerto o cualquier',
      'parte de Puerto Montt',
    ],
    buttonText: 'CONTACTA YA!',
    buttonVariant: 'outlined',
  },
];


// TODO remove, this demo shouldn't need to reset the theme.

export default function Pricing() {
  return (
    <div>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Trayectos Aeropuerto y Los Lagos!
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          ¿Necesitas planificar un viaje con mas personas en Los Lagos o ir al Aeropuerto?
          Contacta con nosotros y cotiza nuestras rutas!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Aeropuerto' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: '#D9CAFF'
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <WhatsAppContact tierVariant={tier.buttonVariant} >
                    {tier.buttonText}
                  </WhatsAppContact>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}