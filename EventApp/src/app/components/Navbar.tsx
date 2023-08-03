import React from 'react'
import styles from '../styles/navbar.module.css'

function Navbar() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav} >
                <div className="styles.leftContainerH">
                    <h1>Logo</h1>
                </div>
                <div className={styles.rightContainerH}>
                    <a href="/">Home</a>
                    <a href="/routes/about-us">About</a>
                    <a href="/routes/events">Events</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar