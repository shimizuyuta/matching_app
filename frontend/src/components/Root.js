
import React ,{Fragment,useLayoutEffect} from 'react'
import Home from './Home'
import { connect } from 'react-redux';
import Landing from './Landing';

const Root = ({children,isAuth}) => {
  console.log('children',isAuth)
  console.log('children',children)
  //Rootコンポーネントに描画する子要素があるか判定
  const content = (children===undefined)? true:false

  return (

    <Fragment>
    {/* ログイン後の'/'の画面 */}
    {isAuth&& content &&(
      <Home/>
    )}
    {/* ログイン後の'/'以外の画面 */}
    {isAuth && !content&&(
      <Fragment>{children}</Fragment>      
    )}

    {/* ログイン前の画面 */}
    {!isAuth&& content&&(
      <Landing/>
    )}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(Root)

