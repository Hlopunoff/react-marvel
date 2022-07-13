import React from 'react'
import styles from './banner.module.scss';
import img from '../../assets/img/avengers.png';
import logo from '../../assets/img/avengers_logo.png';

function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.wrap}>
            <div className={styles['img-wrap']}>
                <img src={img} alt="avengers" className={styles.img} />
            </div>
            <h2 className={styles.title}>New comics every week!<br></br>
            Stay tuned!</h2>
        </div>
        <div className={styles['logo-wrap']}>
            <img src={logo} alt="avengers logo" className={styles.logo} />
        </div>
    </div>
  )
}

export default Banner;