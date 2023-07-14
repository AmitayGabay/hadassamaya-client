import React, { useRef, useState, useEffect } from "react";
import style from './Contact.module.css';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../title/Title";
import { Card } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { apiPost } from "../../shared/services/apiRequests";
import { CREATE_CLIENT_URL } from "../../shared/constants/urls";

const PHONE_REGEX = /^(\+972|0)()?(([23489]{1}\d{7})|([5]{1}[0123456789]{1}\d{7})|([77]{2}\d{7})|([8]{1}[5789]{1}\d{7})|([9]{1}[0-689]{1}\d{7}))$/;
const EMAIL_REGEX = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

const Contact = () => {
    const errorRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [firstNameFocus, setFirstNameFocus] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const [validEmail, setValidEmail] = useState(false);
    const [validPhone, setValidPhone] = useState(false);

    useEffect(() => {
        setValidPhone(PHONE_REGEX.test(phone));
    }, [phone]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);


    useEffect(() => {
        setErrorMessage('');
    }, [firstName, lastName, email, phone, message]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const contactRequest = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: message
            }
            await apiPost(CREATE_CLIENT_URL, contactRequest);
            setSuccess(true);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } catch (error) {
            if (!error.response) {
                setErrorMessage('השרת אינו מגיב');
            } else {
                setErrorMessage('שליחת הפרטים נכשלה')
            }
            errorRef.current.focus();
        }
    }
    return (
        <div className={style.flexBox}>
            {success ? (
                <section className={style.section}>
                    <Title padding="16px" titlesArr={[
                        { h2: "פרטיך נקלטו בהצלחה במערכת" },
                        { h3: "נחזור אליך בהקדם האפשרי" },
                        { h4: "תודה!" }
                    ]} />
                </section>
            ) : (
                <section className={style.section}>
                    <p ref={errorRef} className={errorMessage ? `${style.errmsg}` : `${style.offscreen}`}>{errorMessage}</p>
                    <Title titlesArr={[
                        { h2: "השאירו פרטים ונחזור אליכם" }
                    ]} />
                    <form className={style.form} onSubmit={handleSubmit}>
                        <label className={style.label} htmlFor="firstname">*שם פרטי:</label>
                        <input className={style.input}
                            type="text"
                            id="firstname"
                            autoComplete="off"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            required
                            onFocus={() => setFirstNameFocus(true)}
                            onBlur={() => setFirstNameFocus(false)}
                        />
                        <p id="uidnote" className={firstNameFocus && firstName.trim().length < 2 ? `${style.instructions}` : `${style.offscreen}`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            שם פרטי הוא שדה חובה.
                        </p>
                        <label className={style.label} htmlFor="lastname">*שם משפחה:</label>
                        <input className={style.input}
                            type="text"
                            id="lastname"
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            required
                            onFocus={() => setLastNameFocus(true)}
                            onBlur={() => setLastNameFocus(false)}
                        />
                        <p id="uidnote" className={lastNameFocus && lastName.trim().length < 2 ? `${style.instructions}` : `${style.offscreen}`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            שם משפחה הוא שדה חובה.
                        </p>
                        <label className={style.label} htmlFor="phone">*נייד:
                            <FontAwesomeIcon icon={faCheck} className={validPhone ? `${style.valid}` : `${style.hide}`} />
                            <FontAwesomeIcon icon={faTimes} className={validPhone || !phone ? `${style.hide}` : `${style.invalid}`} />
                        </label>
                        <input className={style.input}
                            type="text"
                            id="phone"
                            autoComplete="off"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            required
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                        />
                        <p id="uidnote" className={phoneFocus && !validPhone ? `${style.instructions}` : `${style.offscreen}`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            נייד הוא שדה חובה. <br />
                            יש להזין מספר נייד תקין.
                        </p>
                        <label className={style.label} htmlFor="email">*מייל:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? `${style.valid}` : `${style.hide}`} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? `${style.hide}` : `${style.invalid}`} />
                        </label>
                        <input className={style.input}
                            type="email"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="uidnote" className={emailFocus && !validEmail ? `${style.instructions}` : `${style.offscreen}`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            מייל הוא שדה חובה. <br />
                            יש להזין כתובת מייל תקינה.
                        </p>
                        <div>
                            <label className={style.label} htmlFor="message">הודעה:</label>
                            <textarea className={style.textarea}
                                type="text"
                                id="message"
                                autoComplete="off"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                        </div>
                        <button className={style.button} disabled={firstName.trim().length < 2 || lastName.trim().length < 2 || !validEmail || !validPhone ? true : false}>שלח</button>
                    </form>
                </section>
            )}
            <div className={style.detailsSection}>
                <Title titlesArr={[
                    { h2: "דברו איתנו☎️" }
                ]} />
                <Card className={style.card}>
                    <div className={style.details}>
                        <h3>הדסה:</h3>
                        <p className={style.p}>נייד- <a className={style.link} href="tel:052-412-5553">052-4125553</a></p>
                        <div className={style.wrapsIcons}>
                            <a href="https://wa.me/972524125553" target="_blank">
                                <WhatsAppIcon className={style.whatsappIcon} fontSize="large" color="secondary" />
                            </a>
                            <a href="https://www.facebook.com/people/%D7%94%D7%93%D7%A1%D7%94-%D7%92%D7%91%D7%90%D7%99/100000412115830/"
                                target="_blank">
                                <FacebookIcon className={style.facebookIcon} fontSize="large" color="secondary" />
                            </a>
                            <a href="https://www.instagram.com/hadassa_sp/" target="_blank">
                                <InstagramIcon className={style.instagramIcon} fontSize="large" color="secondary" />
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className={style.card}>
                    <div className={style.details}>
                        <h3>מאיה:</h3>
                        <p className={style.p}>נייד- <a className={style.link} href="tel:054-228-1720">054-2281720</a></p>
                        <div className={style.wrapsIcons}>
                            <a href="https://wa.me/972542281720" target="_blank">
                                <WhatsAppIcon className={style.whatsappIcon} fontSize="large" color="secondary" />
                            </a>
                            <a href="https://www.facebook.com/maya.don.3"
                                target="_blank">
                                <FacebookIcon className={style.facebookIcon} fontSize="large" color="secondary" />
                            </a>
                            <a href="https://www.instagram.com/maya.don.1/" target="_blank">
                                <InstagramIcon className={style.instagramIcon} fontSize="large" color="secondary" />
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Contact;