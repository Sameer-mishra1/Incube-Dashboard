import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import LoginSVG from '../../assets/login.svg'
import googleIcon from '../../assets/icons8-google.svg'
import linkedinIcon from '../../assets//icons8-linkedin.svg'
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
        <img className={styles["contianer-login__icon"]} src={googleIcon} />
        <img className={styles["contianer-login__icon"]} src={linkedinIcon} />
      </Link>
      </div>
      <p className={styles["container-login__warning"]}>By signing-up you agree to our Term & conditions and Privacy Policy.</p>
      </div>
      </div>
    </div>
  );

};

export default Login;
