import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AccountCircle, Email, Phone, BusinessCenter, Business, LocationOn, CreditCard, People } from '@mui/icons-material';
import profile from './profile.png'; 

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    maxWidth: '800px',
    margin: 'auto',
    marginTop: theme.spacing(4),
    backgroundColor: '#f5f5f5', 
    borderRadius: '40px', 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    padding: theme.spacing(5), 
    border: '1px solid #e0e0e0', 
  },
  header: {
    backgroundColor: '#d7a022', 
    color: '#fff', 
    borderRadius: '10px 10px 0 0', 
    padding: theme.spacing(2), 
    textAlign: 'center', 
  },
  headerTitle: {
    fontSize: '1.8rem', 
    fontFamily: 'Arial, sans-serif', 
    fontWeight: 'bold', 
    marginBottom: theme.spacing(1), 
  },
  content: {
    padding: theme.spacing(4),
  },
  typography: {
    fontFamily: 'Times new roman, sans-serif', 
    color: '#333333', 
    fontSize: '2.4rem', 
    display: 'flex',
    alignItems: 'center', 
    marginBottom: theme.spacing(1), 
    marginTop: theme.spacing(1), 
  },
  boldText: {
    fontWeight: 'bold', // Make the text bold
  },
  icon: {
    marginRight: theme.spacing(1), 
    color: '#d7a022', 
  },
}));

const UserProfileCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={<Typography variant="h5" className={classes.headerTitle}>Basic Information</Typography>}
      />
      <CardContent className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Avatar alt="Profile Picture" src={profile} className={classes.avatar} style={{ width: '120px', height: '120px' }} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="body1" className={`${classes.typography} ${classes.boldText}`} style={{ marginTop: '10px' }}>
              <AccountCircle className={classes.icon} />
              Name: &nbsp; <span className={classes.boldText}>  Yeabsira Dereje</span>
            </Typography>
            <Typography variant="body1" className={`${classes.typography} ${classes.boldText}`}>
              <Email className={classes.icon} />
              Email: &nbsp; <span className={classes.boldText}>  yeab149@gmail.com</span>
            </Typography>
            <Typography variant="body1" className={`${classes.typography} ${classes.boldText}`}>
              <Phone className={classes.icon} />
              Phone Number: &nbsp; <span className={classes.boldText}>  +251974071544</span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardHeader
        className={classes.header}
        title={<Typography variant="h5" className={classes.headerTitle}>Business Information</Typography>}
      />
      <CardContent className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" className={classes.typography}>
              <BusinessCenter className={classes.icon} />
              Company Name: &nbsp; <span className={classes.boldText}>  Abc Trading</span>
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              <Business className={classes.icon} />
              Business Type: &nbsp; <span className={classes.boldText}>  Commercial</span>
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              <LocationOn className={classes.icon} />
              Business Branches: &nbsp; <span className={classes.boldText}>  4</span>
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              <People className={classes.icon} />
              Number of Employees: &nbsp; <span className={classes.boldText}>  10</span>
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              <CreditCard className={classes.icon} />
              Expected Credit: &nbsp; <span className={classes.boldText}>  30,000</span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;


















