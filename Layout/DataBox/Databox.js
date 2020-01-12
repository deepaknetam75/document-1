import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchForm from '../Form/SearchForm';
import KeyTable from '../Table/KeyTable/KeyTable';
import ValueTable from '../Table/ValueTable/ValueTable';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  
}));

const Databox = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}  >
          <Paper className={classes.paper} elevation={3} >
            <SearchForm/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
            <KeyTable/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ValueTable/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Databox ;