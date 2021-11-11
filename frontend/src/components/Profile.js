import React,{useEffect,useState,useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Grid,Divider,Box,Button,Dialog,Modal,Fab} from '@material-ui/core'
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';
import DialogContent from '@material-ui/core/DialogContent';
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";


const EllipsisText = (props) => {
  const { children } = props

  return (
    <Grid container  style={{width:"34px"}}>
      <StarIcon  style={{color:"#ffab00"}}/>
      {children}
    </Grid>
  )
}
const Profile = () => {
  const useStyles = makeStyles((theme) => ({
    root:{
      maxWidth:'800px',
      margin:'auto'

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
      // marginBottom:'2px'
    },
    form:{
      backgroundColor:'#fff',
      border:"solid 2px yellow",
      borderRadius:'.4rem',
      margin:".3rem",
      padding:".3rem",
      textAlign:"center",
    },
    formRight:{
      // textAlign: 'center',
      textAlign:'center'
    },
    footer:{
      marginRight:theme.spacing(3),
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
    margin: {
      margin: theme.spacing(1),
      width: "250px"
    },
    paper: {
      padding: theme.spacing(2),
      paddingBottom:0,

      marginRight:'auto',
      marginLeft:'auto',
      maxWidth:'330px',
      minWidth:'300px',
      borderRadius: "8px",
      background: "rgb(238,174,202)",
      boxShadow: "0 4px 15px rgba(0,0,0,.2)"
    },
    box:{
      margin:theme.spacing(1),
      padding:theme.spacing(1),
      marginBottom:0,
    },
    button:{
      marginRight:theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <Box className={classes.root}>
    <DialogContent className={classes.profile}>
     <Avatar alt="Remy Sharp" src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" className={classes.avatar} />
     <Box className={classes.box} sx={{paddingBottom:16}}>
       {/* <Typography variant="body1" component="h5" xs={5} >基本情報</Typography> */}
       <Typography variant="body1" component="h5" xs={5} style={{margin:'.6rem',marginTop:0}}>基本情報</Typography>
       <Grid item   direction="row" container spacing={4} >
         <Grid item xs={6} >
          <Typography variant="body2" component="h5" xs={5}>ニックネーム</Typography>
         </Grid>
         <Grid item xs={6} >
           <Typography variant="subtitle2" component="h5"xs={7}>田中太郎</Typography>
         </Grid>
       </Grid>
       <Grid item   direction="row" container spacing={4} >
         <Grid item xs={6}>
          <Typography variant="body2" component="h5" xs={5}>地域</Typography>
         </Grid>
         <Grid item xs={6} >
           <Typography variant="subtitle2" component="h5"xs={7}>東京都</Typography>
         </Grid>
       </Grid>
       <Grid item   direction="row" container spacing={4} >
         <Grid item xs={6}>
          <Typography variant="body2" component="h5" xs={5}>学部</Typography>
         </Grid>
         <Grid item xs={6} >
           <Typography variant="subtitle2" component="h5"xs={7}>医学部</Typography>
         </Grid>
       </Grid>
       <Grid item   direction="row" container spacing={4} >
         <Grid item xs={6}>
          <Typography variant="body2" component="h5" xs={5}>学年</Typography>
         </Grid>
         <Grid item xs={6} >
           <Typography variant="subtitle2" component="h5"xs={7}>1年</Typography>
         </Grid>
       </Grid>
       <Grid item   direction="row" container spacing={4} >
         <Grid item xs={6}>
          <Typography variant="body2" component="h5" xs={5}>実務経験</Typography>
         </Grid>
         <Grid item xs={6} >
           <Typography variant="subtitle2" component="h5"xs={7}>あり</Typography>
         </Grid>
       </Grid>
     </Box>
     <Divider />

     <Box className={classes.box}>
       <Typography variant="body1" component="h5" xs={5} style={{margin:'.6rem'}}>スキル</Typography>
       
       <Grid container direction="row"  justifyContent="space-between" spacing={2}>
         <Grid item xs={6} >
         JavaScript
         </Grid>
         <Grid item xs={6}>
           <Rating name="read-only" value={3} readOnly />
         </Grid>
       </Grid>
       <Grid container direction="row"  justifyContent="space-between" spacing={2}>
         <Grid item xs={6} >C++</Grid>
         <Grid item xs={6}>
         <Rating name="read-only" value={3} readOnly />
         </Grid>
       </Grid>
       <Grid container direction="row"  justifyContent="space-between" spacing={2}>
         <Grid item xs={6} >Python</Grid>
         <Grid item xs={6}>
         <Rating name="read-only" value={3} readOnly />
         </Grid>
       </Grid>
     </Box>
     <Divider />
     <Typography variant="body1" component="h5" xs={5} style={{margin:'.6rem'}}>希望スキル・レベル</Typography>

     <Paper variant="outlined">
       {/* {chipData.map((data)=>{

       })} */}
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
     <Box sx={{m:1,p:1,marginBottom:0,paddingBottom:16}}>

       {/* <Typography variant="body1" component="h5" xs={5} >基本情報</Typography> */}
       <Typography variant="body1" component="h5" xs={5} style={{margin:'.3rem'}}>コメント</Typography>
       <Grid item   direction="row" container  style={{padding:'.3rem'}}>
         田中ゆうせいと申します。
         はじめまして。趣味はプログラミングです。親友は後閑君とカー君、菅ちゃんです。特技は逆切れです！！！！！！！！！よろしくです～(*｀艸´)ｳｼｼｼ
       </Grid>
     </Box>
     <Divider />
     <Grid
        container
        direction="row"
        justifyContent="flex-end"
        className={classes.footer}
      >
        <Button
            variant="contained"
            color="secondary"
            startIcon={<EditIcon/>}
            // onClick={handleClose}
            className={classes.button}
            component={Link} to="/profile/edit"
        >
          プロフィール編集
        </Button>   
      </Grid>
     </DialogContent>

    </Box>
  )
}

export default Profile
