import React, {useState, useEffect} from 'react';

import MoodsList from './Moods';
import VerseDisplay from './VerseDisplay';
import {verses} from '../assets/verses';
import Modal from 'react-modal';
import './style.css';

const customStyles = {
    content : {
        overflow: "auto",
        top: "10%",
        bottom: "auto",
        maxHeight: "87%",
    },
    overlay: {
        backgroundColor: "rgba(255,255,255,0.95)",
    }
  };

function Home(){

    const [overlayFadeout, setOverlayFadeout] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [verse, setVerse] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const showModal = () =>{
        setIsModalVisible(true);
        // setVerse(verse);
    }

    const setRandomVerse = (id) => {
        // console.log(id);
        setCurrentIndex(id);
        let verse = verses[id].verses[Math.floor(Math.random() * verses[id].verses.length)];
        // console.log(verse);
        setVerse(verse);
        showModal();
    }

    useEffect(()=>{
        setTimeout(()=>{
            setOverlayFadeout("fadeout");
        }, 500);
    }, []);

    return(
        <div className="w3-container">
            <div className={"w3-overlay " + overlayFadeout} style={{display: "block", backgroundColor: "white"}}></div>
            <br/>
            <div className="w3-container w3-padding">
                <Modal  
                 isOpen = {isModalVisible}
                 onRequestClose={()=>{setIsModalVisible(false)}}
                 style={customStyles}>
                    <div className="w3-container w3-content">
                        <VerseDisplay  verse={verse} />
                        <hr/>
                        <div className="w3-right" >
                            <div className="w3-btn w3-white w3-border" onClick={()=>{setRandomVerse(currentIndex)}}>Câu khác</div>
                            &nbsp;
                            <div className="w3-btn w3-black" onClick={()=>{setIsModalVisible(false)}}>Đóng</div>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className="w3-center">
                <h1 className="font-charm w3-jumbo w3-hide-small">Lắng nghe Lời Chúa</h1>
                <h1 className="font-charm w3-jumbo w3-hide-medium w3-hide-large">Lắng nghe<br/> Lời Chúa</h1>
            </div>
            <br/><br/>
            <h1 className="w3-center font-dancing">Bạn đang...</h1>
            <br/><br/>
            <div className="w3-content font-baloo">
                <MoodsList randomVerse={setRandomVerse} verses={verses}/>
            </div>
            <br/><br/><br/>
        </div>
    );
}

export default Home;