import React from 'react';
import style from "./Sliders.module.css";
import Text from '../text/Text';
import Title from '../title/Title';

const Sliders = () => {
    return (
        <div className={style.container}>
            <div id="carouselExampleDark" className="carousel carousel-dark slide myS" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="one carousel-item active">
                        <div className={style.oneImg}></div>
                        <div className="carousel-caption d-none d-sm-block">
                            <Title titlesArr={[
                                { h3: "הדבר היחיד שהוא יותר גרוע מלהתחיל ולהיכשל, הוא לא להתחיל בכלל" }
                            ]} />
                            <Text textsArr={[
                                "סת' גודין"
                            ]} />
                        </div>
                    </div>
                    <div className="two carousel-item">
                        <div className={style.twoImg}></div>
                        <div className="carousel-caption d-none d-sm-block">
                            <Title titlesArr={[
                                { h3: "מוטיבציה היא מה שגורם לך להתחיל, הרגל גורם לך להמשיך" }
                            ]} />
                            <Text textsArr={[
                                "ג'ים רון"
                            ]} />
                        </div>
                    </div>
                    <div className="three carousel-item">
                        <div className={style.threeImg}></div>
                        <div className="carousel-caption d-none d-sm-block">
                            <Title titlesArr={[
                                { h3: "אתה לא יכול לשנות את הקלפים שחילקו לך, אבל אתה יכול לשחק איתם חכם" }
                            ]} />
                            <Text textsArr={[
                                "רנדי פאוש"
                            ]} />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Sliders;


