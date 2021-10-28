const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require('../../Models/User')
const jwt = require('jsonwebtoken');
module.exports={
  login:async(req,res,next)=>{

  },
  logout:async(req,res,next)=>{
   
  },
  signup:async(req,res,next)=>{
    const {password,email,username} = req.body
    try{
      let user = await User.findOne({email:email,password:password})
      //既にユーザーが登録されていた時の処理
      if(user) return res.status(409).json({error:'既にユーザーが存在しています。'})
      //新規ユーザー登録
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPass = bcrypt.hashSync(password, salt);
      
      user = new User({username,email,hashPass})
      await user.save()
      //トークン発行
      const payload = {}
      jwt.sign(payload,(err,token)=>{
        if(err) throw err;
        res.json({token})
      })


    }catch(err){
      console.log(err.message,'DB error')
      return res.status(500).json({error:'サーバーエラー'})
    }
  }
}



