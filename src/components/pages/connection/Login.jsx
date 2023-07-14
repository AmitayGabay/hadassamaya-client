import React, { useRef, useState, useEffect, useContext } from "react";
import style from "./Login.module.css";
import { login, logout } from "../../../shared/services/apiRequests";
import { ADMIN_LOGIN_URL, ADMIN_LOGOUT_URL } from "../../../shared/constants/urls";
import { useNavigate } from "react-router-dom";
import AdminContext from "../../../shared/contexts/AdminContext";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import BorderLine from "../../borderLine/BorderLine";

function Login() {
    const navigate = useNavigate();
    const { updateCurrentAdmin, currentAdmin } = useContext(AdminContext);
    const adminRef = useRef();
    const errorRef = useRef();

    const [adminname, setAdminname] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        adminRef.current.focus();
    }, []);

    useEffect(() => {
        setErrorMessage("");
    }, [adminname, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const admin = await login(ADMIN_LOGIN_URL, adminname, password);
            updateCurrentAdmin(admin);
            setAdminname("");
            setPassword("");
            navigate("/manager");
        } catch (e) {
            if (!e.response) {
                setErrorMessage("השרת אינו מגיב");
            } else {
                setErrorMessage("שם מנהל או סיסמה שגויים");
            }
            errorRef.current.focus();
        }
    };

    const handleLogout = async () => {
        try {
            const res = await logout(ADMIN_LOGOUT_URL);
            console.log(res);
            updateCurrentAdmin(null);
            navigate("/");
        } catch (e) {
            if (!e.response) {
                setErrorMessage("השרת אינו מגיב");
            } else {
                setErrorMessage("היציאה מהחשבון נכשלה");
            }
            errorRef.current.focus();
        }
    }

    return (
        <>
            <Header />
            <BorderLine />
            <div className={style.logIn}>
                <section className={style.section}>
                    <p ref={errorRef} className={errorMessage ? `${style.error_mes}` : `${style.offscreen}`}>
                        {errorMessage}
                    </p>
                    <h1 className={style.center}>התחברות מנהל</h1>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <label className={style.label} htmlFor="adminname">שם מנהל:</label>
                        <input className={style.input}
                            type="text"
                            id="adminname"
                            ref={adminRef}
                            autoComplete="off"
                            onChange={(e) => setAdminname(e.target.value)}
                            value={adminname}
                            required
                        />
                        <label className={style.label} htmlFor="password">סיסמה אישית:</label>
                        <input className={style.input}
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button className={style.button} type="submit" disabled={!adminname.trim().length || !password.trim().length}>
                            התחבר
                        </button>
                        {currentAdmin &&
                            <>
                                <p className={style.connected}>
                                    מחובר כבר?
                                    <br />
                                    <a href="/manager" className={style.link}>כנס</a>
                                </p>
                                <p className={style.connected}>
                                    לצאת מהחשבון?
                                    <br />
                                    <span className={style.link} onClick={handleLogout}>צא</span>
                                </p>
                            </>}
                    </form>
                </section>
            </div>
            <BorderLine />
            <Footer />
        </>
    );
}

export default Login;