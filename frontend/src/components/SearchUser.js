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
            <Typography component="h5" align="right" variant="h6">検索条件</Typography>
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
      <Typography component="h1" align="right" variant="body1" color="textSecondary" className="mt-1" >学年</Typography>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>指定なし</em>
          </MenuItem>
          <MenuItem value={1}>高校生</MenuItem>
          <MenuItem value={2}>大学・専門１年生</MenuItem>
          <MenuItem value={3}>大学・専門2年生</MenuItem>
          <MenuItem value={4}>大学・専門3年生</MenuItem>
          <MenuItem value={5}>大学・専門4年生</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Box>
      <Divider component="li" />
      
      <Box sx={{ p:2 ,mx:1}}>
      <Grid container direction="row" justifyContent="space-between" >
      <Typography component="h1" align="right" variant="body1" color="textSecondary" className="mt-1" >実務経験</Typography>
      <FormControl className={classes.formControl}>
        <Select
          value={experience}
          onChange={handleExperience}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>指定なし</em>
          </MenuItem>
          <MenuItem value={1}>あり</MenuItem>
          <MenuItem value={2}>なし</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Box>
      <Divider component="li" />

      <Box sx={{ p:2 ,mx:1}}>
      <Grid container direction="row" justifyContent="space-between" >
      <Typography component="h1" align="right" variant="body1" color="textSecondary" className="mt-1" >年齢</Typography>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>指定なし</em>
          </MenuItem>
          <MenuItem value={1}>高校生</MenuItem>
          <MenuItem value={2}>大学・専門１年生</MenuItem>
          <MenuItem value={3}>大学・専門2年生</MenuItem>
          <MenuItem value={4}>大学・専門3年生</MenuItem>
          <MenuItem value={5}>大学・専門4年生</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Box>
      <Divider component="li" />

      <Box sx={{ p:2 ,mx:1}}>
      <Grid container direction="row" justifyContent="space-between" >
      <Typography component="h1" align="right" variant="body1" color="textSecondary" className="mt-1" >地域</Typography>


      <FormControl　className={classes.formControl}>
        <Select
          labelId="demo-name-label"
          id="demo-name"
          value={location}
          onChange={handleLocation}
        >

          <MenuItem value={0}>指定なし</MenuItem>
          <MenuItem value={1}>北海道</MenuItem>
          <MenuItem value={2}>青森県</MenuItem>
          <MenuItem value={3}>岩手県</MenuItem>
          <MenuItem value={4}>宮城県</MenuItem>
          <MenuItem value={5}>秋田県</MenuItem>
          <MenuItem value={6}>山形県</MenuItem>
          <MenuItem value={7}>福島県</MenuItem>
          <MenuItem value={8}>茨城県</MenuItem>
          <MenuItem value={9}>栃木県</MenuItem>
          <MenuItem value={10}>群馬県</MenuItem>
          <MenuItem value={11}>埼玉県</MenuItem>
          <MenuItem value={12}>千葉県</MenuItem>
          <MenuItem value={13}>東京都</MenuItem>
          <MenuItem value={14}>神奈川県</MenuItem>
          <MenuItem value={15}>新潟県</MenuItem>
          <MenuItem value={16}>富山県</MenuItem>
          <MenuItem value={17}>石川県</MenuItem>
          <MenuItem value={18}>福井県</MenuItem>
          <MenuItem value={19}>山梨県</MenuItem>
          <MenuItem value={20}>長野県</MenuItem>
          <MenuItem value={21}>岐阜県</MenuItem>
          <MenuItem value={22}>静岡県</MenuItem>
          <MenuItem value={23}>愛知県</MenuItem>
          <MenuItem value={24}>三重県</MenuItem>
          <MenuItem value={25}>滋賀県</MenuItem>
          <MenuItem value={26}>京都府</MenuItem>
          <MenuItem value={27}>大阪府</MenuItem>
          <MenuItem value={28}>兵庫県</MenuItem>
          <MenuItem value={29}>奈良県</MenuItem>
          <MenuItem value={30}>和歌山県</MenuItem>
          <MenuItem value={31}>鳥取県</MenuItem>
          <MenuItem value={32}>島根県</MenuItem>
          <MenuItem value={33}>岡山県</MenuItem>
          <MenuItem value={34}>広島県</MenuItem>
          <MenuItem value={35}>山口県</MenuItem>
          <MenuItem value={36}>徳島県</MenuItem>
          <MenuItem value={37}>香川県</MenuItem>
          <MenuItem value={38}>愛媛県</MenuItem>
          <MenuItem value={39}>高知県</MenuItem>
          <MenuItem value={40}>福岡県</MenuItem>
          <MenuItem value={41}>佐賀県</MenuItem>
          <MenuItem value={42}>長崎県</MenuItem>
          <MenuItem value={43}>熊本県</MenuItem>
          <MenuItem value={44}>大分県</MenuItem>
          <MenuItem value={45}>宮崎県</MenuItem>
          <MenuItem value={46}>鹿児島県</MenuItem>
          <MenuItem value={47}>沖縄県</MenuItem>
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
        この条件で検索
      </Fab>
      <Fab variant="extended"  className={classes.margin}>
        すべてリセット
      </Fab>
      </Grid>

      </Paper>
    </main>
  )
}

export default SearchUser
