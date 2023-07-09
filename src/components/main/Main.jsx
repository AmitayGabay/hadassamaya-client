import React from 'react';
import style from "./Main.module.css";
import Text from '../text/Text';
import Title from '../title/Title';
import Ul from '../ul/Ul';

const Main = () => {
    return (
        <main className={style.main} >
            {/* <Title titlesArr={[
                { h2: "מה הולך להיות בסדנאות?" }
            ]} />
            <Ul itemsArr={[
                `אנו מעבירות את הסדנאות בצורה חווייתית, דרך משחקים חברתיים, מעגלי שיחה, קלפים טיפוליים, זמנים חופשיים למינגלינג בליווי בעלי חיים טיפוליים.`,
                `נעבור 3 ימים חווייתים - 
            שכוללים ארוחות בוקר, פעילויות קבוצתיות וסדנאות העצמה והעשרה.
            בונוס - חוברת להטמעת הכלים בחיי היומיום.
            `
            ]} /> */}
            <Title titlesArr={[
                { h3: 'בסדנאות נעסוק בתכנים המלווים את הנערות בחיי היומיום:' }
            ]} />
            <Text textsArr={[
                `⦿ דימוי וערך עצמי
            ⦿ יחסים בין-אישיים ותקשורת 
            ⦿ התמודדות עם קונפליקטים 
            ⦿ יצירת אקטיביות ויזימת מפגשים חברתיים
            ⦿ גישה חדשה להיכרות עם חברים
            ⦿ טכניקות לעבודה עם רגשות לא נעימים
            ⦿ כיצד להגן על עצמן בזמן אמת
            ⦿ כיצד לפעול באומץ על אף הביישנות
            ⦿ להכיר את עצמן ולהתאהב בעצמן מחדש`
            ]} />
            <Title titlesArr={[
                { h3: "למי זה מתאים?" }
            ]} />
            <Ul itemsArr={[
                `נערות בגיל 10-18 (קבוצות נפרדות לגילאים שונים)`,
                `בתקופת מעבר לכיתה/ מסגרת חדשה`,
                `חוות הצקות/ התנכלויות בבית הספר`,
                `מתקשות להחזיק חברויות לאורך זמן`,
                `לא מוזמנות למפגשים חברתיים`,
                `רוצות לשפר ולשדרג את המיומנויות החברתיות`
            ]} />
            {/* <div className={style.flexBox}>
                <div className={style.wrapsDetails}>
                    <div className={style.details}>
                        <Title titlesArr={[
                            { h5: "איפה הסדנה תתקיים?" }
                        ]} />
                        <Text textsArr={[
                            `📌פתח תקווה - א.ד גורדון 23`
                        ]} />
                    </div>
                    <div className={style.details}>
                        <Title titlesArr={[
                            { h5: "⏱️ימים ושעות?" }
                        ]} />
                        <Text textAlign='center' textsArr={[
                            `18-20.7.2023`,
                            `בין השעות 10:00-13:00`
                        ]} />
                    </div>
                    <div className={style.details}>
                        <Title titlesArr={[
                            { h5: "💸ההשקעה:" }
                        ]} />
                        <Text textsArr={[
                            `900₪`
                        ]} />
                    </div>
                </div>
            </div> */}
        </main>
    )
}

export default Main;