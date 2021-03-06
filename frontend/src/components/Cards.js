import React,{useEffect,useState,useRef} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Grid,Divider,Box,ListItem,ListItemText,ButtonGroup,Button,Dialog,Modal} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import ListIcon from '@material-ui/icons/List';
import DetailModal from './DetailModal'





const Cards = (props) => {
  const [users,setUsers] = useState([...props.users])
  const [open,setOpen] = useState(false)
  const ref = useRef(null);
  const [chipData,setChipData] = [
    {  label: "Angular", level: 1 },
    {  label: "Polymer", level: 3 },
    {  label: "React", level: 2 },
    {  label: "Vue.js", level: 1 },
  ]
  const handleClickOpen = () => {
    setOpen(!open);
  };

    const his = (history) =>{
    switch(history){
      case 0:
       console.log('aaa');
       return '～半年'
      case 1:
       return '半年~1年'
      case 2:
       return '1年~1年半'
      case 3:
        return '2~2年半'
      case 4:
        return '2年半~3年'
      case 5:
        return '3~3年半'
      case 6:
        return '3年半~4年'
      default:
        return '4年以上'
    }
  }
  console.log('children__________',users)
  console.log('lopne',open)
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'blue',
      padding:'3%',
      // justifyContent:'space-between',
      display: "flex",
      flexWrap: "wrap",
    },
  　chip:{
    textAlign: 'left',
    },
    avatar:{
      textAlign: 'center',
      margin:'auto',
      width: theme.spacing(15),
      height: theme.spacing(15),
      border: '2px solid lightgray',
      marginBottom:'20px'
    },
    form:{
      backgroundColor:'#fff',
      border:"solid 2px yellow",
      borderRadius:'.4rem',
      margin:".3rem",
      padding:".3rem",
      textAlign:"center",
    },
    formLeft:{
      textAlign: 'center',
      fontWeight:'bold'
    },
    profile:{
      display:'flex',
      flexDirection:'column',
      padding:theme.spacing(1),
      margin:theme.spacing(1),
      paddingTop:0,
      marginTop:0,
      overflow:"scroll",
      '&::-webkit-scrollbar': {
        display:'none'
      },
    },
    item:{

      backgroundColor:'red',
      display: "flex",
      flexWrap: 'wrap',

    },
    paper: {
      padding: theme.spacing(2),
      margin:theme.spacing(2),
      marginBottom:theme.spacing(3),
      maxWidth:'330px',
      minWidth:'300px',
      borderRadius: "8px",
      background: "rgb(238,174,202)",
      boxShadow: "0 4px 15px rgba(0,0,0,.2)"
    },
  }));
  const classes = useStyles();
  return (
      // <Grid  container spacing={2} className={classes.root}>
          <Paper className={classes.paper} >
          {/* <Paper className={classes.paper} xs={12} sm={6} md={4} lg={3} xl={2}> */}
          <Avatar alt="Remy Sharp" src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" className={classes.avatar} />

          <Typography variant="subtitle2" component="h2" style={{textAlign: 'center'}}>
          経済学部  1年
          </Typography>
          <Typography variant="h6" component="h2" style={{textAlign: 'center'}} >
            田中　ゆうせい
          </Typography>
          <Box>
           <Typography variant="body1" component="h5">スキル</Typography>
           {/* <Chip label="スキル" className={classes.chip}/> */}
           <Grid container direction="row" item xs={12} className={classes.form}>
             <Grid item xs={6} style={{textAlign: 'center'}}>Java</Grid>
             <Grid item xs={6}>
             <Rating name="read-only" value={3} readOnly />
             </Grid>
           </Grid>
           <Grid container direction="row" item xs={12} className={classes.form}>
             <Grid item xs={6} style={{textAlign: 'center'}}>C++</Grid>
             <Grid item xs={6}>
             <Rating name="read-only" value={1} readOnly />
             </Grid>
           </Grid>
           <Grid container direction="row" item xs={12} className={classes.form}>
             <Grid item xs={6} style={{textAlign: 'center'}}>python</Grid>
             <Grid item xs={6}>
             <Rating name="read-only" value={1} readOnly />
             </Grid>
           </Grid>
          </Box>

          <Box 
            sx={{pt:1}}
            display="flex" 
            justifyContent="space-evenly"                           
          >
            <Button
              variant="contained"
              color="secondary"
              startIcon={<ListIcon/>}
              onClick={handleClickOpen}
            >
            詳細
            </Button>  
            <Button
              variant="contained"
              color="secondary"
              startIcon={<FavoriteIcon/>}
            >
              いいね！
            </Button>         
          </Box>
          {/* モーダル */}
            <DetailModal open={open} />

         　 </Paper>
      // </Grid>
  )
}

export default Cards
