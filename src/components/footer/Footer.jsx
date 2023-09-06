import React from 'react';
import style from './Footer.module.css';
import CustomButton from '../customButton/CustomButton';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={style.footer}>
            <div>
                <CustomButton text={"לראש העמוד"} func={scrollToTop} />
            </div>
            <div>
                <p className={style.p}>2023 by Amitay-Gabay ©</p>
            </div>
        </div>
    )
}

export default Footer;