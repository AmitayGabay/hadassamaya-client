import React from 'react';
import style from "./Main.module.css";
import Text from '../text/Text';
import Title from '../title/Title';
import Ul from '../ul/Ul';

const Main = () => {
    return (
        <main className={style.main} >
            <Text textsArr={[
                `במיוחד בימים אלו, שהמפגשים החברתיים הפיזיים מועטים ודרכי התקשורת שלנו ברובן דרך הרשת החברתית, הנערות זקוקות מאוד לתקשורת ישירה, לשיח מפרה ולעידוד מפגש רגשי עם האחר.`
            ]}></Text>
            <Title titlesArr={[
                { h2: "אז מה בסדנה?" }
            ]} />
            <Ul itemsArr={[
                `אנו מעבירות את הסדנה בצורה חוויתית, בגישת הNLP, דרך משחקים חברתיים, מעגלי שיחה, קלפים טיפוליים, זמנים חופשיים למינגלינג בליווי בעלי חיים טיפוליים.`,
                `נעבור 3 ימים חווייתים - 
            שכוללים ארוחות בוקר, פעילויות קבוצתיות וסדנאות העצמה והעשרה.
            בונוס - חוברת להטמעת הכלים בחיי היומיום.
            `
            ]} />
            <Text textsArr={[
                `בסדנה נעסוק בתכנים המלווים את הנערות בחיי היומיום:`,
                `⦿ דימוי וערך עצמי
            ⦿ יחסים בין-אישיים ותקשורת 
            ⦿ התמודדות עם קונפליקטים 
            ⦿ יצירת אקטיביות ויזימת מפגשים חברתיים
            ⦿ גישה חדשה להיכרות עם חברים
            ⦿ טכניקות לעבודה עם רגשות לא נעימים
            ⦿ כיצד להגן על עצמן בזמן אמת
            ⦿ כיצד לפעול באומץ על אף הביישנות
            ⦿להכיר את עצמן ולהתאהב בעצמן מחדש`
            ]} />
            <Title titlesArr={[
                { h2: "למי זה מתאים?" }
            ]} />
            <Ul itemsArr={[
                `נערות בגיל 10-14`,
                `בתקופת מעבר לכיתה/מסגרת חדשה`,
                `חוות הצקות בבית ספר`,
                `מתקשות להחזיק חברויות לאורך זמן`,
                `לא מוזמנות למפגשים חברתיים`
            ]} />
            <div className={style.flexBox}>
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
            </div>
        </main>
    )
}

export default Main;