import { Link } from "react-router-dom";
import LoginSVG from '../../assets/Illustrations/login.svg'
import googleIcon from '../../assets/Icons/icons8-google.svg'
import linkedinIcon from '../../assets/Icons/icons8-linkedin.svg'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div>
      <div className={styles.container}>
      <div className={styles['container-svg']}>
      <img src={LoginSVG} alt="Login SVG Icon" />
      <p>One click away from the entire <br /> 
<strong>Indian Startup Ecosystem!</strong></p>
      </div>
      <div className={styles["container-login"]}>
      <h1 className={styles["contianer-login__title"]}>INCUBE</h1>
      <h3 className={styles["contianer-login__title"]}>What describes you best?</h3>
      <div>
      <button className={styles["container-login__button"]}>Accelerator</button>
      <button className={styles["container-login__button"]}>Incubator</button>
      </div>
        <p className={styles["container-login__signup"]}>Sign up with:</p>
      <div className={styles["container-icon"]}>
      <Link to='/dashboard'> 
        <img className={styles["contianer-login__icon"]} src={googleIcon} alt="Google Icon" />
        <img className={styles["contianer-login__icon"]} src={linkedinIcon} alt="LinkedIn Icon" />
      </Link>
      </div>
      <p className={styles["container-login__warning"]}>By signing-up you agree to our <a href='/terms-and-conditions' target="_blank">Term & conditions</a> and <a href='/privacy-policy' target="_blank">Privacy Policy</a>.</p>
      </div>
      </div>
    </div>
  );

};

export default Login;
