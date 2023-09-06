import { useRef, useContext } from 'react';
import Sliders from "../../sliders/Sliders";
import Title from "../../title/Title";
import Text from "../../text/Text";
import BorderLine from "../../borderLine/BorderLine";
import Main from "../../main/Main";
import { Card } from "@mui/material";
import Question from "../../question/Question";
import Gallery from "../../gallery/Gallery";
import Contact from "../../contact/Contact";
import style from './Home.module.css';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import CustomButton from '../../customButton/CustomButton';
import AdminContext from '../../../shared/contexts/AdminContext';

const questions = [
    {
        question: "למה דווקא אנחנו?",
        answer: "אנו נשות מקצוע בעולם הטיפולי, בעלות ניסיון רב בעבודה עם בני נוער. רכשנו כלים שונים מעולמות החינוך, הכלבנות הטיפולית, הרכיבה הטיפולית והחיבור בין נערים וילדים לעולם בעלי החיים. בנוסף, אנו עובדות כמטפלות NLP פרטניות וקבוצתיות ומנוסות בשיח רגשי ובעבודה המותאמת באופן פרטני לכל נער ונערה. הסדנה דוגלת ביצירת שינוי חברתי - דרך עבודה על מיומנויות חברתיות ולמידת תקשורת בריאה ונכונה."
    },
    {
        question: "לאיזה גילאים זה מתאים?",
        answer: "את הסדנה ניתן להתאים לטווח גילאים רחב - גילאי חטיבה, תיכון ויסודי מכיתה ד'-ו'."
    },
    {
        question: "כמה משתתפים בקבוצה?",
        answer: "עד 10 משתתפים."
    },
    {
        question: "מה אורכו של מפגש?",
        answer: "שעה. (חוץ מסדנת הפרימיום)"
    },
    {
        question: "מהם הכלים שלומדים בסדנה?",
        answer: "בסדנה נלמד כלים מעולם ה-NLP והחשיבה החיובית לתקשורת חברתית, יצירת שיחה עם אנשים חדשים, גיבוש עמדה אישית, הבנת החוזקות והכוחות שלנו ושימוש בהם, איך לתפוס תשומת לב בזמן שיחה."
    },
    {
        question: "לבת שלי יש קושי להשתלב חברתית, האם הסדנה יכולה להתאים לה?",
        answer: "חד משמעית כן! בסדנאות המשלבות בעלי חיים ישנו חיבור לעולם החיות אשר מהווה מכנה משותף ששובר קרח ומקליל את האווירה. בקבוצה האווירה מקבלת ולא שיפוטית וכך המשתתפים יכולים לחוות מערכת תמיכה חברתית משמעותית, בה יוכלו להתאמן במיומנויות חברתיות."
    }
]


const Home = () => {
    const { currentAdmin, isRequestCompleted } = useContext(AdminContext);

    const sectionRef = useRef(null);

    const scrollToContactSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={style.homeContainer}>
            <Header />
            {(isRequestCompleted && !currentAdmin) && <div className={style.contactButton}>
                <CustomButton text='צרו קשר' func={scrollToContactSection} />
            </div>}
            <section className={style.oneSection}>
                <Text textsArr={[
                    `הסדנאות שלנו מועברות בצורה חווייתית ומהנה, דרך משחק, שיח פתוח ומאפשר ותרגול סימולציות מחיי היומיום שלהן. הן מספקות לנערות הכוונה וכלים ליצירת קשרים חברתיים בריאים ולחיזוק הדימוי העצמי החברתי שלהן. חלק מהסדנאות מועברות בשילוב טיפול באמצעות כלבים / סוסים.`,
                    `לאורך השנים בעבודתנו עם נערות, מצאנו כי הן עלולות להיות חשופות לפגיעות שונות בבית הספר ובחברה. בעקבות כך הן פחות נוכחות במפגשים חברתיים, מעדיפות לבלות את מרבית זמנן מול המסך בבית, ומתקשות לייצר חברויות יציבות ובריאות עם סביבתן.`,
                    `מסיבה זו פיתחנו סדנאות שיעצימו אותן ויתנו להן כלים וטכניקות מעולם ה-NLP להתמודדות נכונה יותר בחיי היום יום.`,
                    `מטרת הסדנאות הינה לאפשר שיח עמוק בגובה העיניים, לעודד חשיבה יצירתית ואמיצה, לחזק את הביטחון העצמי, להקנות כלים להתמודדות עם קונפליקטים בכיתה ועם סיטואציות חברתיות מורכבות. בתקופת גיל ההתבגרות הנערות מגבשות את זהותן ולכן חשוב במיוחד לפתח אצלן את המיומנות להקשיב לקולן הפנימי.`
                ]}>
                </Text>
            </section>
            <Sliders />
            <Main />
            <section className={style.secondSection}>
                <BorderLine />
                <Title padding='24px' titlesArr={[
                    { h2: "הסדנאות שלנו" }
                ]} />
                <div className={style.flexBox}>
                    <div className={`${style.box} ${style.pink}`}>
                        <Title titlesArr={[
                            { h5: "סדנת היכרות" }
                        ]} />
                        <Text textsArr={[
                            `סדנה חד פעמית להיכרות וקבלת כלים בסיסיים ליצירת קשרים חברתיים מעולם ה-NLP.`
                        ]} />
                    </div>
                    <div className={`${style.box} ${style.turquoise}`}>
                        <Title titlesArr={[
                            { h5: "סדנת עומק תהליכית" }
                        ]} />
                        <Text textsArr={[
                            `סדנה מעמיקה לאורך 10 מפגשים, בה הנערות ילמדו שיטות ליצירת כימיה וחיבור עם סביבתן דרך שפת הגוף, משחקים חברתיים, מעגלי שיחה, קלפים טיפוליים וסימולציות של סיטואציות חברתיות נפוצות.`
                        ]} />
                    </div>
                    <div className={`${style.box} ${style.yellow}`}>
                        <Title titlesArr={[
                            { h5: "סדנת עומק + בונוס" }
                        ]} />
                        <Text textsArr={[
                            `סדנת עומק תהליכית + בונוס כלבים טיפוליים.`,
                            `"הכלב הוא חברו הטוב של האדם"`
                        ]} />
                    </div>
                    <div className={`${style.box} ${style.purple}`}>
                        <Title titlesArr={[
                            { h5: "סדנת פרימיום" }
                        ]} />
                        <Text textsArr={[
                            `תקשורת קבוצתית ובין אישית ברמה הגבוהה ביותר. 6 מפגשים באורך 3 שעות כל אחד!`,
                            `הסדנה תתקיים בחווה טיפולית, בה הנערות יחוו רכיבה על סוסים שתעצים את הביטחון העצמי שלהן.`,
                            `"הסוס הינו מראה לאישיות שלנו ומהווה פידבק עבורנו".`
                        ]} />
                    </div>
                </div>
                <BorderLine />
            </section>
            <section className={style.thirdSection}>
                <Title padding='24px' titlesArr={[
                    { h2: "מי אנחנו?" }
                ]} />
                <div className={style.imgFlexBox}>
                    <Card className={style.card} elevation={12}>
                        <div className={style.imgBox}>
                            <img className={style.img} src={"https://lh3.googleusercontent.com/pw/AIL4fc9q8wZjQGO2oskoDjEEfg-dTtrXzt6tqK4JRsVflZfEVRMySwf7FqdkGLHeF5bFDvMQCpXG4rPMnDs2bl9r-nwHzUTfdlTqSx1sX294ncTUmMtmoK_MVtTSnVXXMspXrGhspz3dv_zfOm4KIPy92DRjLg=w750-h750-s-no?authuser=0"} width={200} height={200} alt="pic" />
                            <Title titlesArr={[
                                { h3: "הדסה גבאי" }
                            ]} />
                            <Text textsArr={[
                                `שמי הדסה,
                             מטפלת בNLP
                             ומטפלת באמצעות סוסים`,
                                `בשנים האחרונות עסקתי בתחום הטיפול עם בני נוער וילדים שחוו קשיים בתחום החברתי והרגשי.
                             נתקלתי במקרים רבים ביניהם – ביישנות, סגירות, חוסר ביטחון עצמי, דימוי עצמי נמוך, ועוד.`,
                                `עיקר השיטה שלי דוגלת בהטמעת חיזוקים חיוביים, ללמוד להתאמץ גם כשקשה, להראות למטופלים שיש מי שרואה אותם, מעריך אותם, ללמוד להסתכל על ההצלחות הקטנות שבדרך.
                             במהלך המפגשים אנו מתמקדים בבניית מוטיבציה פנימית, כוח רצון ותחושת מסוגלות עצמית גבוהה, החיזוק הפנימי שנוצר אצל המטופלים שלי זה מה שנותן לי סיפוק.`,
                                `מאוד חשוב לי שמי שייצא מהמפגשים איתי ירגיש מועצם, לא יפחד לעשות דברים, ינסה ויהיה לו אומץ. כשהייתי ילדה היו לי הרבה קשיים, בעיקר בפן הלימודי בבית הספר ועצם העובדה שלא ויתרתי זה מה שגרם לי להצליח. לא תמיד האמינו בי, אם הייתי מקשיבה לקולות שהנמיכו אותי לא הייתי מגיעה בסוף לכל ההצלחות שלי.
                             חשוב לי שהמטופלים שלי ילמדו להרים את עצמם גם כשאין תמיד את התמיכה מסביב. אני רואה במטופלים שלי את הסיבות שהגיעו אלי, אבל בעיקר חשוב לי לראות את הנקודות הטובות, החוזקות שלהם, כי אני מאמינה שזה מה שיקדם אותם וייתן להם כוחות להמשיך להתקדם ולהצליח.
                            `
                            ]} />
                        </div>
                    </Card>
                    <Card className={style.card} elevation={12}>
                        <div className={style.imgBox}>
                            <img className={style.img} src={"https://lh3.googleusercontent.com/pw/AIL4fc8yfSKl98dqW7rajAPTp6NJhL4InLqu7Ch9s7yOJ2ArwDZPSNsQRKfmPKM24PiVe1HPgMMtSYPI18xCieqYZ_NT4KTpv2PkOz7RmKs8lTwvTVl1mdlE_iz2WARt3JKS0-rcRr3EgNQAy2F256zWOfQ2wg=w749-h749-s-no?authuser=0"} width={200} height={200} alt="pic" />
                            <Title titlesArr={[
                                { h3: "מאיה דון" }
                            ]} />
                            <Text textsArr={[
                                `שמי מאיה,
                               מאמנת NLP, מטפלת בעזרת כלבים,
                               בעלת תואר ראשון (BA) בחינוך וסוציולוגיה, עם תעודת הוראה במדעי החברה.
                               מגדלת את מון וסטאר הקסומים- 2 כלבים טיפוליים מלאי אהבה ונתינה.
                               `,
                                `בשנים האחרונות ליוויתי ילדים ונערות דרך כלבנות טיפולית ושיטת הNLP. 
                               נתקלתי במקרים מורכבים, חרדות ופחד מכלבים, חוסר ביטחון עצמי, דימוי עצמי נמוך, 
                               בעיות כעסים, חוסר במיומנויות חברתיות, לקויות תקשורת ועוד.
                               עם כל מטופל השתדלתי לתת את המענה הנכון לו דרך הקשבה לקצב והחוזקות שלו. 
                               באמצעות שיקופים דרך הכלבים הגענו לשורש הבעיה ויכלנו בדרכים יצירתית לדון על רגשות ופתרונות.
                               עיקר השיטה שלי דוגלת במציאת דרכים יצירתיות ליצירת פתרונות בעזרת תקשורת בריאה עם הסביבה.
                               `,
                                `באופן אישי חשוב לי שהמטופלים ידעו להגיד את מה שהם מרגישים ולעמוד על שלהם. 
                               בילדותי הייתי במקום שבו לא הצלחתי להביא את עצמי לידי ביטוי. 
                               חשוב לי שמי שיעברו איתי תהליך יצליחו להסתכל על הדברים אחרת, ובמקום להישאב למקום שלילי ולא מקדם, לחשוב איך יכול להיות טוב יותר מכאן? 
                               ללמוד להשתמש בכוחות וביכולות שלנו ולהסכים לצאת מאיזור הנוחות.`,
                                `חשוב לי שלדור הצעיר תהיה עצמאות ויכולת להסתדר בכל מצב, 
                               כי באני מאמין שלי - ככה בונים חברה טובה יותר.`
                            ]} />
                        </div>
                    </Card>
                </div>
            </section>
            <section className={style.commonQuestions}>
                <BorderLine />
                <Title padding='24px' titlesArr={[
                    { h2: "שאלות נפוצות" }
                ]} />
                <div className={style.questions}>
                    {questions.map((question, index) => <Question key={index} question={question.question} answer={question.answer} />)}
                </div>
                <BorderLine />
            </section>
            <section className={style.gallery}>
                <Gallery />
            </section>
            <section ref={sectionRef} className={style.contact}>
                <BorderLine />
                <Contact />
                <BorderLine />
            </section>
            <Footer />
        </div>
    )
}

export default Home;