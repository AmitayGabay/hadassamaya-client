import { useState, useEffect } from 'react';
import style from "./Gallery.module.css";

const Gallery = () => {
    const [isBoxesClicked, setIsBoxesClicked] = useState(Array(20).fill({ clicked: false, zIndex: 0 }));
    const [counterZIndex, setCounterZIndex] = useState(1);
    const updateBoxStatus = (boxNumber) => {
        let updatedBoxes = structuredClone(isBoxesClicked);
        for (let i = 0; i < isBoxesClicked.length; i++) {
            if (i === boxNumber) {
                updatedBoxes[boxNumber] = { clicked: !isBoxesClicked[i].clicked, zIndex: isBoxesClicked[i].zIndex };
            }
        }
        if (updatedBoxes[boxNumber].clicked) {
            updatedBoxes[boxNumber] = { clicked: updatedBoxes[boxNumber].clicked, zIndex: counterZIndex };
            setCounterZIndex(counterZIndex + 1);
        } else {
            updatedBoxes[boxNumber] = { clicked: updatedBoxes[boxNumber].clicked, zIndex: 0 };
        }
        setIsBoxesClicked(updatedBoxes);
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        // Update the window width state when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            {(windowWidth > 1250) ?
                <div className={style.media}>
                    <div style={{ zIndex: isBoxesClicked[0].zIndex }} className={!isBoxesClicked[0].clicked ? `${style.box} ${style.box0}` : `${style.boxClicked} ${style.box0}`} onClick={() => updateBoxStatus(0)}></div>
                    <div style={{ zIndex: isBoxesClicked[1].zIndex }} className={!isBoxesClicked[1].clicked ? `${style.box} ${style.box1}` : `${style.boxClicked} ${style.box1}`} onClick={() => updateBoxStatus(1)}></div>
                    <div style={{ zIndex: isBoxesClicked[2].zIndex }} className={!isBoxesClicked[2].clicked ? `${style.box} ${style.box2}` : `${style.boxClicked} ${style.box2}`} onClick={() => updateBoxStatus(2)}></div>
                    <div style={{ zIndex: isBoxesClicked[3].zIndex }} className={!isBoxesClicked[3].clicked ? `${style.box} ${style.box3}` : `${style.boxClicked} ${style.box3}`} onClick={() => updateBoxStatus(3)}></div>
                    <div style={{ zIndex: isBoxesClicked[4].zIndex }} className={!isBoxesClicked[4].clicked ? `${style.box} ${style.box4}` : `${style.boxClicked} ${style.box4}`} onClick={() => updateBoxStatus(4)}></div>
                    <div style={{ zIndex: isBoxesClicked[5].zIndex }} className={!isBoxesClicked[5].clicked ? `${style.box} ${style.box5}` : `${style.boxClicked} ${style.box5}`} onClick={() => updateBoxStatus(5)}></div>
                    <div style={{ zIndex: isBoxesClicked[6].zIndex }} className={!isBoxesClicked[6].clicked ? `${style.box} ${style.box6}` : `${style.boxClicked} ${style.box6}`} onClick={() => updateBoxStatus(6)}></div>
                    <div style={{ zIndex: isBoxesClicked[7].zIndex }} className={!isBoxesClicked[7].clicked ? `${style.box} ${style.box7}` : `${style.boxClicked} ${style.box7}`} onClick={() => updateBoxStatus(7)}></div>
                    <div style={{ zIndex: isBoxesClicked[8].zIndex }} className={!isBoxesClicked[8].clicked ? `${style.box} ${style.box8}` : `${style.boxClicked} ${style.box8}`} onClick={() => updateBoxStatus(8)}></div>
                    <div style={{ zIndex: isBoxesClicked[9].zIndex }} className={!isBoxesClicked[9].clicked ? `${style.box} ${style.box9}` : `${style.boxClicked} ${style.box9}`} onClick={() => updateBoxStatus(9)}></div>
                    <div style={{ zIndex: isBoxesClicked[10].zIndex }} className={!isBoxesClicked[10].clicked ? `${style.box} ${style.box10}` : `${style.boxClicked} ${style.box10}`} onClick={() => updateBoxStatus(10)}></div>
                    <div style={{ zIndex: isBoxesClicked[11].zIndex }} className={!isBoxesClicked[11].clicked ? `${style.box} ${style.box11}` : `${style.boxClicked} ${style.box11}`} onClick={() => updateBoxStatus(11)}></div>
                    <div style={{ zIndex: isBoxesClicked[12].zIndex }} className={!isBoxesClicked[12].clicked ? `${style.box} ${style.box12}` : `${style.boxClicked} ${style.box12}`} onClick={() => updateBoxStatus(12)}></div>
                    <div style={{ zIndex: isBoxesClicked[13].zIndex }} className={!isBoxesClicked[13].clicked ? `${style.box} ${style.box13}` : `${style.boxClicked} ${style.box13}`} onClick={() => updateBoxStatus(13)}></div>
                    <div style={{ zIndex: isBoxesClicked[14].zIndex }} className={!isBoxesClicked[14].clicked ? `${style.box} ${style.box14}` : `${style.boxClicked} ${style.box14}`} onClick={() => updateBoxStatus(14)}></div>
                    <div style={{ zIndex: isBoxesClicked[15].zIndex }} className={!isBoxesClicked[15].clicked ? `${style.box} ${style.box15}` : `${style.boxClicked} ${style.box15}`} onClick={() => updateBoxStatus(15)}></div>
                    <div style={{ zIndex: isBoxesClicked[16].zIndex }} className={!isBoxesClicked[16].clicked ? `${style.box} ${style.box16}` : `${style.boxClicked} ${style.box16}`} onClick={() => updateBoxStatus(16)}></div>
                    <div style={{ zIndex: isBoxesClicked[17].zIndex }} className={!isBoxesClicked[17].clicked ? `${style.box} ${style.box17}` : `${style.boxClicked} ${style.box17}`} onClick={() => updateBoxStatus(17)}></div>
                    <div style={{ zIndex: isBoxesClicked[18].zIndex }} className={!isBoxesClicked[18].clicked ? `${style.box} ${style.box18}` : `${style.boxClicked} ${style.box18}`} onClick={() => updateBoxStatus(18)}></div>
                    <div style={{ zIndex: isBoxesClicked[19].zIndex }} className={!isBoxesClicked[19].clicked ? `${style.box} ${style.box19}` : `${style.boxClicked} ${style.box19}`} onClick={() => updateBoxStatus(19)}></div>
                </div>
                :
                <div className={style.resMedia}>
                    <div className={`${style.resBox} ${style.box0}`}></div>
                    <div className={`${style.resBox} ${style.box1}`}></div>
                    <div className={`${style.resBox} ${style.box2}`}></div>
                    <div className={`${style.resBox} ${style.box3}`}></div>
                    <div className={`${style.resBox} ${style.box4}`}></div>
                    <div className={`${style.resBox} ${style.box5}`}></div>
                    <div className={`${style.resBox} ${style.box6}`}></div>
                    <div className={`${style.resBox} ${style.box7}`}></div>
                    <div className={`${style.resBox} ${style.box8}`}></div>
                    <div className={`${style.resBox} ${style.box9}`}></div>
                    <div className={`${style.resBox} ${style.box10}`}></div>
                    <div className={`${style.resBox} ${style.box11}`}></div>
                    <div className={`${style.resBox} ${style.box12}`}></div>
                    <div className={`${style.resBox} ${style.box13}`}></div>
                    <div className={`${style.resBox} ${style.box14}`}></div>
                    <div className={`${style.resBox} ${style.box15}`}></div>
                    <div className={`${style.resBox} ${style.box16}`}></div>
                    <div className={`${style.resBox} ${style.box17}`}></div>
                    <div className={`${style.resBox} ${style.box18}`}></div>
                    <div className={`${style.resBox} ${style.box19}`}></div>
                </div>}
        </>
    )
}

export default Gallery;