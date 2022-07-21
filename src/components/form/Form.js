import React from 'react'
import { Link } from 'react-router-dom';

import styles from './form.module.scss';

const Form = (props) => {
  return (
    <>
        <form className={styles.form}>
            <label htmlFor="name" className={styles.label}>Or find a character by name:</label>
            <div className={styles.wrap}>
                <div className={styles.default}>
                    <input type="text" className={styles.input} name='name' placeholder='Enter name'/>
                    <button className={styles.submit}>find</button>
                </div>
                <div className={styles.res}>
                    <span className={styles.success}>There is! Visit name page?</span>
                    <Link to='/comics' className={styles['btn-success']}>to page</Link>
                </div>
            </div>
        </form>
    </>
  )
}

export default Form;