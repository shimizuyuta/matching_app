import { combineReducers } from "redux";
import { REGISTER_SUCCESS, REGISTER_FAIL , USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, DELETE_ACCOUNT, GET_PROFILE, GET_PROFILES} from '../actions/types'

const initalState = {
  profile:[],
  profiles:[],
  loading:false,
  error:{},

};


const profile =(state=initalState,action)=> {
  let {type, payload} = action
  console.log('action type',type)
  console.log('action type',payload)

  switch(type){
    case GET_PROFILE:
      return{
        ...state,
        isAuth:true,
        loading:false,
        user:payload,
      };

    case GET_PROFILES:
      return{
        ...state,
        isAuth:true,
      };
    
    case REGISTER_SUCCESS:   
      console.log('payload,,,,,,,,',payload)
        localStorage.setItem('token', payload.token);
        return {
            ...state,
            ...payload,
            isAuth: true,
            loading: false
        }
    case LOGOUT:
      localStorage.removeItem('token')
      return{
        ...state,
        token:null,
        isAuth:false,
        loading:false,
        id:null,
        username:null,
        provider:null,
      }
    
    default:
      return state
  }
}


export default profile