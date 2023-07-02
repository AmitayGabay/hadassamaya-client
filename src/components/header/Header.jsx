import React from 'react';
import style from './Header.module.css';
import Title from '../title/Title';
import logo from '../../shared/assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const navigateToAdminPage = () => {
        navigate('/login');
    }

    return (
        <header className={style.header}>
            <div className={style.admin} onClick={navigateToAdminPage}>
            </div>
            <Title titlesArr={[
                { h1: "סדנת NLP בקיץ" },
                { h2: "בוסט ביטחון עצמי לבנות נוער" }
            ]} />
            <div className={style.logo}>
                <a href="/">
                    <img src={logo} height={200} alt="logo" />
                </a>
            </div>
        </header>
    )
}

export default Header;