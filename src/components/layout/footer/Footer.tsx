import React from 'react';
import styles from "./Footer.module.scss"
import Image from "next/image";
import instagram from "../../../../public/instagram.png"
import vk from "../../../../public/vk.png"
import telegram from "../../../../public/telegram.png"
import location from "../../../../public/location.png"
import mobile from "../../../../public/mobile.png"
import mail from "../../../../public/mail.png"
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topFooter}>
                <div className={styles.findUs}>
                    <Image width={32} height={32} src={location} alt="location" />
                    <div>
                        <h3>Find Us</h3>
                        <p>Lorem ipsum dolor.</p>
                    </div>
                </div>
                <div className={styles.callUs}>
                    <Image width={32} height={32} src={mobile} alt="mobile" />
                    <div>
                        <h3>Call Us</h3>
                        <p>98765432104</p>
                    </div>
                </div>
                <div className={styles.mailUs}>
                    <Image width={32} height={32} src={mail} alt="e-mail" />
                    <div>
                        <h3>Mail Us</h3>
                        <p>tereskinegor68@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <div className={styles.followUs}>
                    <h3>Follow Us</h3>
                    <div>
                        <a href="/">
                            <Image width={32} height={32} src={instagram} alt="instagram" />
                        </a>
                        <a href="https://vk.com/e.ter67">
                            <Image width={32} height={32} src={vk} alt="vk" />
                        </a>
                        <a href="/">
                            <Image width={32} height={32} src={telegram} alt="telegram" />
                        </a>
                    </div>
                </div>
                <div className={styles.usefulLinks}>
                    <h3>Useful Links</h3>
                    <div>
                        <Link href="/films"><div>Home</div></Link>
                        <Link href="/films"><div>About</div></Link>
                        <Link href="/films"><div>Films</div></Link>
                        <Link href="/films"><div>Contacts</div></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

