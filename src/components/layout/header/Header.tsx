import React, {FC} from 'react';
import styles from "./Header.module.scss"
import Image from "next/image";
import logo from "../../../../public/logo.png"
import Link from "next/link";
export const Header = () => {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                <Image width={32} height={32} src={logo} alt="Логотип" />
                <h1>ssxdtxr</h1>
            </a>
            <ul className={styles.nav}>
                <Link href="/"><li>Home</li></Link>
                <li>About</li>
                <Link href="/films"><li>Films</li></Link>
                <li>Contacts</li>
            </ul>
        </header>
    );
};

