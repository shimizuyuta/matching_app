const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require('../../Models/User')
const jwt = require('jsonwebtoken');
const generateToken = require('../passport/generateToken')
require('dotenv').config();

module.exports={
  login:async(req,res)=>{
    const {password,email} = req.body
    try{
      //providerがemailの場合
      //メールからユーザーが登録されているかの確認
      let user = await User.find({email})
      user = user[0]
      console.log('user',user)
      if(!user) return res.status(400).json({error:'ユーザーが存在しません。'})
　　　 //パスワードの確認
      // const isMatch = await bcrypt.compare(password, user.password);
      // if(!isMatch)return res.status(400).json({error:'パスワードに誤りがあります。'})

      //token作成し、必要なデータをレスポンス
      const token = generateToken(user)
      console.log('token___',token)
      res.status(200).json({id:user.id,username:user.username,provider:user.provider,token:token})
    }
    catch(e){
      console.log('e.message',e.message)
      res.send(500).send({error:'サーバーエラー'})
    }
  },
  logout:async(req,res,next)=>{
    const token = ''
    res.status(200).json({token})
  },
  signup:async(req,res,next)=>{
    try{
      const {password,email,username} = req.body
      let user = await User.findOne({email:email})
      //既にユーザーが登録されていた時の処理
      if(user) return res.status(500).json({error:'既にユーザーが存在しています。'})
      //新規ユーザー登録
      const hashedPassword = bcrypt.hashSync(password, 10)
      user = await User.create({username,email,password:hashedPassword})
      await user.save()
      //token作成し、必要なデータをレスポンス
      const token = generateToken(user)
      console.log('ユーザーがDBに保存されました')
      res.send({id:user.id,username:user.username,provider:user.provider,token:token})
    }
    catch(err){
      console.log(err.message,'DB error')
      return res.status(500).json({error:'サーバーエラー'})
    }
  }
}



