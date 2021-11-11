const express = require('express');
const User = require('../../Models/User')
require('dotenv').config();

module.exports={
  findOneUser:async(req,res)=>{
    try {
      const user = await User.findById(req.user.id)
      res.json(user)
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error')
  }
  },

  updateUser:async(req,res)=>{
    const {_id,fafa,email}= req.body
    console.log(email,'id')
    console.log(fafa,'fafa')
  },

  findUser:async(req,res)=>{
    //暫定的に
    //今後は検索条件をもとにヒットするユーザーを表示
    const user = await User.find()
    res.status(200).send(user)
  },

  allUsers:async(req,res)=>{
    //暫定的に
    //今後は検索条件をもとにヒットするユーザーを表示
    const user = await User.find()
    res.status(200).send(user)
  },


}



