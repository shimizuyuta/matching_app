import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { Box,DialogContent,Avatar,Grid,Divider,Paper,Chip } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';


const EllipsisText = (props) => {
  const { children } = props

  return (
    <Grid container  style={{width:"34px"}}>
      <StarIcon  style={{color:"#ffab00"}}/>
      {children}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    maxWidth:'1400px',
    margin:'auto',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  box:{
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  footer:{
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  button:{
    margin:theme.spacing(2)
  },
  avatar:{
    textAlign: 'center',
    padding:'center',
    margin:'auto',
    marginTop:'10%',
    marginBottom:'10%',
    width: 200,
    height: 200,
    border: '2px solid lightgray',
    [theme.breakpoints.between('sm','md')]: {
      width:150,
      height:150,
    },
  },
}));

const ProfileForm = () => {
  const classes = useStyles();

  return (
<Grid className={classes.root}>
  <Grid container>
    <Grid xs={12} sm={3}>
      <Avatar alt="Remy Sharp" src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"  className={classes.avatar} />    
    </Grid>
    <Grid className={classes.box}  xs={12} sm={8} >
      <Typography variant="body1" component="h5" xs={5} style={{margin:'.6rem',marginTop:0}} >基本情報</Typography>
      <Grid item   direction="row" container spacing={4} >
        <Grid item xs={6} >
         <Typography variant="body2" component="h5" xs={5}>ニックネーム</Typography>
        </Grid>
        <Grid item xs={6} >
          {/* <Typography variant="subtitle2" component="h5"xs={7}>田中太郎</Typography> */}
          <TextField required id="standard-required"  defaultValue="田中太郎" />
        </Grid>
      </Grid>
      <Grid item   direction="row" container spacing={4} >
        <Grid item xs={6}>
         <Typography variant="body2" component="h5" xs={5}>地域</Typography>
        </Grid>
        <Grid item xs={6} >
          {/* <Typography variant="subtitle2" component="h5"xs={7}>東京都</Typography> */}
          <TextField required id="standard-required"  defaultValue="東京都" />
        </Grid>
      </Grid>
      <Grid item   direction="row" container spacing={4} >
        <Grid item xs={6}>
         <Typography variant="body2" component="h5" xs={5}>学部</Typography>
        </Grid>
        <Grid item xs={6} >
          {/* <Typography variant="subtitle2" component="h5"xs={7}>医学部</Typography> */}
          <TextField required id="standard-required"  defaultValue="医学部" />

        </Grid>
      </Grid>
      <Grid item   direction="row" container spacing={4} >
        <Grid item xs={6}>
         <Typography variant="body2" component="h5" xs={5}>学年</Typography>
        </Grid>
        <Grid item xs={6} >
          {/* <Typography variant="subtitle2" component="h5"xs={7}>1年</Typography> */}
          <TextField required id="standard-required"  defaultValue="１年" />
        </Grid>
      </Grid>
      <Grid item   direction="row" container spacing={4} >
        <Grid item xs={6}>
         <Typography variant="body2" component="h5" xs={5}>実務経験</Typography>
        </Grid>
        <Grid item xs={6} >
          {/* <Typography variant="subtitle2" component="h5"xs={7}>あり</Typography> */}
          <TextField required id="standard-required"  defaultValue="あり" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  <Divider />
  <Grid  container justifyContent="center">
    <Grid className={classes.box} xs={10} >
      <Typography variant="body1" component="h5" xs={5} style={{margin:'.6rem'}}>スキル</Typography>     
      <Grid container direction="row"  justifyContent="space-between" spacing={2}>
        <Grid item xs={6} >
        JavaScript
        </Grid>
        <Grid item xs={6}>
          <Rating name="read-only" value={3}  />
        </Grid>
      </Grid>
      <Grid container direction="row"  justifyContent="space-between" spacing={2}>
        <Grid item xs={6} >C++</Grid>
        <Grid item xs={6}>
        <Rating name="read-only" value={3}  />
        </Grid>
      </Grid>
      <Grid container direction="row"  justifyContent="space-between" spacing={2}>
        <Grid item xs={6} >Python</Grid>
        <Grid item xs={6}>
        <Rating name="read-only" value={3}  />
        </Grid>
      </Grid>
    </Grid>
    <Divider />
    <Grid className={classes.box} xs={10}>
    <Typography variant="body1" component="h5" xs={5} style={{margin:'.6rem'}}>希望スキル・レベル</Typography>
    <Paper variant="outlined">
      <li style={{listStyle:'none'}}>
        <Chip 
          label={"Java"} 
          style={{margin:"10px",padding:"5px"}}
         icon={<StarIcon>5</StarIcon>}
        />
        <Chip 
          label="PHP"
          deleteIcon={<EllipsisText>3</EllipsisText>}
          style={{margin:"10px",padding:"12px"}}
         clickable={false}
         onDelete={true}
        />
        <Chip 
          label="python"
          deleteIcon={<EllipsisText>1</EllipsisText>}
          style={{margin:"10px",padding:"12px"}}
         clickable={false}
         onDelete={true}
        />
        <Chip 
          label="C++"
          deleteIcon={<EllipsisText>5</EllipsisText>}
          style={{margin:"10px",padding:"12px"}}
         clickable={false}
         onDelete={true}
        />
        <Chip 
          label="C++"
          deleteIcon={<EllipsisText>1</EllipsisText>}
          style={{margin:"10px",padding:"12px"}}
         clickable={false}
         onDelete={true}
        />
        <Chip 
          label="C++"
          deleteIcon={<EllipsisText>5</EllipsisText>}
          style={{margin:"10px",padding:"12px"}}
         clickable={false}
         onDelete={true}
        />
      </li>
    </Paper>
    </Grid>
    <Grid className={classes.box} xs={10} sx={{m:1,p:1,paddingBottom:16,marginBottom:16}}>
      <Typography variant="body1" component="h5" xs={5} style={{margin:'.3rem'}}>コメント</Typography>
      <Grid item   direction="row" container  style={{padding:'.3rem'}}>
      <TextField
          id="outlined-multiline-static"
          multiline
          rows={6}
          defaultValue="Default Value"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  </Grid>
  <Box sx={{marginRight:"10%"}}>
  <Grid
    container
    direction="row"
    justifyContent="flex-end"
    className={classes.footer}
    
  >
    <Button
       variant="contained"
        color="secondary"
        startIcon={<ArrowBackIcon/>}
        // onClick={handleClose}
        className={classes.button}
        component={Link} 
        to="/profile"
    >
        戻る
    </Button>   
    <Button
       variant="contained"
        color="secondary"
        startIcon={<EditIcon/>}
        // onClick={handleClose}
        className={classes.button}
        component={Link} 
        to="/"
    >
        編集完了
    </Button>   
  </Grid>
  </Box>
</Grid>

  )
}

export default ProfileForm
