import React, {useState} from 'react';

import MoodsList from './Moods';
import VerseDisplay from './VerseDisplay';

import Modal from 'react-awesome-modal';
import './style.css';

function Home(){

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [verse, setVerse] = useState({});

    const showModal = (verse) =>{
        setIsModalVisible(true);
        setVerse(verse);
    }

    return(
        <div className="w3-container">
            <Modal  visible = {isModalVisible}
                    effect="fadeInUp"
                    width="80%"
                    onClickAway={()=>{setIsModalVisible(false)}}
            >
                <VerseDisplay  verse={verse} />
            </Modal>

            <div className="w3-center">
                <h1 className="font-charm w3-jumbo w3-hide-small">Lắng nghe Lời Chúa</h1>
                <h1 className="font-charm w3-jumbo w3-hide-medium w3-hide-large">Lắng nghe<br/> Lời Chúa</h1>
            </div>
            <br/><br/><br/><br/>
            <h1 className="w3-center font-dancing">Bạn đang...</h1>
            <br/><br/>
            <div className="w3-content font-baloo">
                <MoodsList setVerse={showModal} />
            </div>
        </div>
    );
}

export default Home;