import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Regions from '../InputField/Regions';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SyncIcon from '@material-ui/icons/Sync';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),

    
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  
}));



const SearchForm =() => {
  const classes = useStyles();

  
  
  return (
    <div>
      <Typography align="left" variant="h6" gutterBottom>
        Search Region 
      </Typography>
      <Grid container spacing={3}  >
        
        <Grid item  >
          <Paper className={classes.paper}
          style={{ height:35,width:600}}>
           <Regions /> 
          </Paper>
        </Grid>
        <Grid item >
          <Grid item >
          <Button variant="contained" color="primary" style={{height:35, marginTop:-5}}>
            Get Region Keys
          </Button>
          <InfoIcon color="action"  style={{marginLeft:+20}} />
          </Grid>
        </Grid>
      </Grid>
     
      <Typography align="left" variant="h6" gutterBottom >
        Search Key:
      </Typography>
      <Grid container spacing={3}>
        
        <Grid item>
          <Paper className={classes.paper} style={{ height:35,width:800}}>
            <TextField id="standard-basic" label="Enter Key" style={{ width:780, marginTop:-25} } ></TextField>
          </Paper>
        </Grid>
        <Grid item>
          <Grid item >
            <Button variant="contained" color="primary" style={{height:35, marginTop:-5}}>
              Get Value
            </Button>
            <EditIcon color="action" style={{marginLeft:+20}} />
            <DeleteIcon color="action" style={{marginLeft:+20}} />
            <SyncIcon color="action" style={{marginLeft:+20}} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchForm;