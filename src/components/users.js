import React from 'react'
import styles from './users.module.css'

export default props =>
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
        <h2 className={styles.username}>
            {props.username}
        </h2>
        <p className={styles.excerpt}>
            {props.excerpt}
        </p>
        </div>
    </div>