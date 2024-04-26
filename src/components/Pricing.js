import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import WhatsAppContact from './WhatsAppContact';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Transportes Los Lagos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
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
              href="nosotros"
              sx={{ my: 1, mx: 1.5 }}
            >
              Nosotros
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
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
                  action={tier.title === 'Común Acuerdo' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
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
                  <WhatsAppContact tierVariant={tier.buttonVariant}>
                    {tier.buttonText}
                  </WhatsAppContact>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
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
      {/* End footer */}
    </ThemeProvider>
  );
}