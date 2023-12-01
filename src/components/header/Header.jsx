import { useContext } from 'react';
import style from './Header.module.css';
import Title from '../title/Title';
import { useNavigate } from 'react-router-dom';
import AdminContext from '../../shared/contexts/AdminContext';

const Header = () => {
    const { currentAdmin } = useContext(AdminContext);
    const navigate = useNavigate();
    const navigateToAdminPage = () => {
        navigate('/login');
    }
    const navigateToHomePage = () => {
        navigate('/');
    }

    return (
        <header className={style.header}>
            {currentAdmin ?
                <div className={style.admin}
                    style={{ backgroundImage: `url(${currentAdmin.picture})`, backgroundSize: 'cover', backgroundPosition: 'top', cursor: 'pointer' }}
                    onClick={navigateToAdminPage}>
                </div>
                :
                <div className={style.admin} onClick={navigateToAdminPage}></div>}
            <div className={style.title}>
                <Title titlesArr={[
                    { h1: "הכוח שבנו" },
                    { h2: "סדנאות NLP" },
                    { h3: "לילדים ובני נוער" }
                ]} />
            </div>
            <div className={style.logo} onClick={navigateToHomePage}>
            </div>
        </header>
    )
}

export default Header;