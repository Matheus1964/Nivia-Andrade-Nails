import style from "./Login.module.css";
import "./Login.module.css"
function Login(){
  return(
    <form>
    <div className={style.Container}>
      <h1 className={style.TituloLogin}>Login</h1>
      <input className={style.LoginInput} type="Email" name="name" placeholder="Username" maxlength="35" minlength="2" required></input>
      <input className={style.LoginInput} type="Password" name="Password" placeholder="Password" maxlength="10" minlength="2" required></input>
      <button className={style.LoginButton} type='submit' value='Send' autoFocus>Login</button>
    </div>
    </form>
  )
}
export default Login;