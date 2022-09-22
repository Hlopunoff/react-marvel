import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import MarvelService from '../../services/marvelService';
import { Formik } from 'formik';

import styles from './form.module.scss';

const validate = values => {
    const errors = {};

    if(!values.name) {
        errors.name = 'This field is required';
    }
    return errors;
};

const Form = () => {
    const service = new MarvelService();
    const [char, setChar] = useState(null);

    const onCharFound = (char) => {
        setChar(char);
    };

    const undefinedChar = () => {
        return (
            <div className={styles.res}>
                <span className={styles.error}>The character was not found. Check the name and try again</span>
                <Link to='/comics' className={styles['btn-success']} style={{display: 'none'}}>to page</Link>
            </div>
        );
    };

    return (
        <>
            <Formik
                initialValues={{name: ''}}
                validate={validate}
                onSubmit={(values, {setSubmitting}) => {
                    service.getCharByName(values.name)
                        .then(res => {
                            onCharFound(res);})
                        .catch(() => (undefinedChar()));
                    setSubmitting(false);
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="name" className={styles.label}>Or find a character by name:</label>
                        <div className={styles.wrap}>
                            <div className={styles.default}>
                                <input 
                                    type="text" 
                                    className={styles.input} 
                                    name='name' 
                                    placeholder='Enter name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}/>
                                <button type='submit' className={styles.submit} disabled={isSubmitting}>find</button>
                            </div>
                            {!(errors.name || !char) ? 
                                <div className={styles.res}>
                                    <span className={styles.success}>There is! Visit {char.name} page?</span>
                                    <Link to='/comics' className={styles['btn-success']} style={{display: 'block'}}>to page</Link>
                                </div>
                             : null}
                             {errors.name || touched.name ? 
                                <div className={styles.res}>
                                    <span className={styles.error}>{errors.name}</span>
                                    <Link to='/comics' className={styles['btn-success']} style={{display: 'none'}}>to page</Link>
                                </div>
                             : null}
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
}

export default Form;