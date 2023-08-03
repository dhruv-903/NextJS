import React from 'react'
import styles from '../styles/footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer} >
            <div className={styles.leftContainerF}>
                <h3>Copyright@ All right reserved-2023</h3>
            </div>
            <div className={styles.rightContainerF}>
                <a href="">facebook</a>
                <a href="">instagram</a>
                <a href="">twitter</a>
                <a href="">youtube</a>
            </div>
        </footer>
    )
}

export default Footer