import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import { List} from '@material-ui/core';
import { Grid,Fab,Box } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
    width: "250px"
  },
  list: {
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));

const SearchUser = () => {
  const classes = useStyles();
  const [age, setAge] = useState('');
  const [location,setLocation] = useState(0);
  const [open, setOpen] = useState(0);
  const [experience,setExperience] = useState('')

  const handleChange = (event) => {
    console.log('event',event.target.value)
    setAge(event.target.value);
  };
  const handleExperience = (event) => {
    console.log('event',event.target.value)
    setExperience(event.target.value);
  };
  const handleLocation = (event) => {
    console.log('event',event.target.value)
    setLocation(event.target.value);
  };

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={4}  style={{ color: 'white', backgroundColor: '#3f51b5' }}>
          <Grid item xs={7}>
            <Typography component="h5" align="right" variant="h6">????????????</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography component="h5" align="right" variant="h6">
            <ClearIcon/>
            </Typography>
          </Grid>
        </Grid>

      <List className={classes.list}>
      <Box sx={{ p:2 ,mx:1}}>
      <Grid container direction="row" justifyContent="space-between" >
      <Typography component="h1" align="right" variant="body1" color="textSecondary" className="mt-1" >??????</Typography>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>????????????</em>
          </MenuItem>
          <MenuItem value={1}>?????????</MenuItem>
          <MenuItem value={2}>????????????????????????</MenuItem>
          <MenuItem value={3}>???????????????2??????</MenuItem>
          <MenuItem value={4}>???????????????3??????</MenuItem>
          <MenuItem value={5}>???????????????4??????</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Box>
      <Divider component="li" />
      
      <Box sx={{ p:2 ,mx:1}}>
      <Grid container direction="row" justifyContent="space-between" >
      <Typography component="h1" align="right" variant="body1" color="textSecondary" className="mt-1" >????????????</Typography>
      <FormControl className={classes.formControl}>
        <Select
          value={experience}
          onChange={handleExperience}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>????????????</em>
          </MenuItem>
          <MenuItem value={1}>??????</MenuItem>
          <MenuItem value={2}>??????</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Box>
      <Divider component="li" />

      <Box sx={{ p:2 ,mx:1}}>
      <Grid container direction="row" justifyContent="space-between" >
      <Typography component="h1" align="right" variant="body1" color="textSecondary" className="mt-1" >??????</Typography>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>????????????</em>
          </MenuItem>
          <MenuItem value={1}>?????????</MenuItem>
          <MenuItem value={2}>????????????????????????</MenuItem>
          <MenuItem value={3}>???????????????2??????</MenuItem>
          <MenuItem value={4}>???????????????3??????</MenuItem>
          <MenuItem value={5}>???????????????4??????</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Box>
      <Divider component="li" />

      <Box sx={{ p:2 ,mx:1}}>
      <Grid container direction="row" justifyContent="space-between" >
      <Typography component="h1" align="right" variant="body1" color="textSecondary" className="mt-1" >??????</Typography>


      <FormControl???className={classes.formControl}>
        <Select
          labelId="demo-name-label"
          id="demo-name"
          value={location}
          onChange={handleLocation}
        >

          <MenuItem value={0}>????????????</MenuItem>
          <MenuItem value={1}>?????????</MenuItem>
          <MenuItem value={2}>?????????</MenuItem>
          <MenuItem value={3}>?????????</MenuItem>
          <MenuItem value={4}>?????????</MenuItem>
          <MenuItem value={5}>?????????</MenuItem>
          <MenuItem value={6}>?????????</MenuItem>
          <MenuItem value={7}>?????????</MenuItem>
          <MenuItem value={8}>?????????</MenuItem>
          <MenuItem value={9}>?????????</MenuItem>
          <MenuItem value={10}>?????????</MenuItem>
          <MenuItem value={11}>?????????</MenuItem>
          <MenuItem value={12}>?????????</MenuItem>
          <MenuItem value={13}>?????????</MenuItem>
          <MenuItem value={14}>????????????</MenuItem>
          <MenuItem value={15}>?????????</MenuItem>
          <MenuItem value={16}>?????????</MenuItem>
          <MenuItem value={17}>?????????</MenuItem>
          <MenuItem value={18}>?????????</MenuItem>
          <MenuItem value={19}>?????????</MenuItem>
          <MenuItem value={20}>?????????</MenuItem>
          <MenuItem value={21}>?????????</MenuItem>
          <MenuItem value={22}>?????????</MenuItem>
          <MenuItem value={23}>?????????</MenuItem>
          <MenuItem value={24}>?????????</MenuItem>
          <MenuItem value={25}>?????????</MenuItem>
          <MenuItem value={26}>?????????</MenuItem>
          <MenuItem value={27}>?????????</MenuItem>
          <MenuItem value={28}>?????????</MenuItem>
          <MenuItem value={29}>?????????</MenuItem>
          <MenuItem value={30}>????????????</MenuItem>
          <MenuItem value={31}>?????????</MenuItem>
          <MenuItem value={32}>?????????</MenuItem>
          <MenuItem value={33}>?????????</MenuItem>
          <MenuItem value={34}>?????????</MenuItem>
          <MenuItem value={35}>?????????</MenuItem>
          <MenuItem value={36}>?????????</MenuItem>
          <MenuItem value={37}>?????????</MenuItem>
          <MenuItem value={38}>?????????</MenuItem>
          <MenuItem value={39}>?????????</MenuItem>
          <MenuItem value={40}>?????????</MenuItem>
          <MenuItem value={41}>?????????</MenuItem>
          <MenuItem value={42}>?????????</MenuItem>
          <MenuItem value={43}>?????????</MenuItem>
          <MenuItem value={44}>?????????</MenuItem>
          <MenuItem value={45}>?????????</MenuItem>
          <MenuItem value={46}>????????????</MenuItem>
          <MenuItem value={47}>?????????</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Box>
      <Divider component="li" />
      </List>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
      >
      <Fab variant="extended"color="primary" className={classes.margin}>
        ?????????????????????
      </Fab>
      <Fab variant="extended"  className={classes.margin}>
        ?????????????????????
      </Fab>
      </Grid>

      </Paper>
    </main>
  )
}

export default SearchUser
