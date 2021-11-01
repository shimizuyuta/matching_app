import { combineReducers } from "redux";

const initalState = {
   username:'田中太郎',
   word:'よろしくお願いします。',
   age:33,
   location:'千葉県',
   experience:true,
   skills:[
     {language:'ruby',history:2}
   ]
};


const userLoginReducer = (state=initalState,action)=>{
  switch(action.type){
    case "UserRegisterRquest":
      return {loading:true};

    case "USER_REGISTER_SUCCESS":
      return {loading:false};
    
    default:
      return state;
  }
};

const userReducers = combineReducers({
  login: userLoginReducer,
});

export default userReducers;