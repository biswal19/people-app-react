import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FetchRandomUser from "./components/FetchRandomUser";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
     <div className="App">
      <h1>Welcome to the Planet World</h1>
      <h2>Fetch a list from an API and display it</h2>
     </div>
    
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Planets"/> 
        <Tab label="Favorites" />
        
      </Tabs>
    </Paper>
    <FetchRandomUser />
    </div>
  );
}