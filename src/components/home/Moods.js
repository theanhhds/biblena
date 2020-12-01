import React from 'react';
import {verses} from '../assets/verses';

function Moods(props){
    let col = new Array(), row = new Array(), list = new Array();

    const setVerse = (id) => {
        // console.log(id);
        let verse = verses[id].verses[Math.floor(Math.random() * verses[id].verses.length)];
        // console.log(verse);
        props.setVerse(verse);
    }

    verses.map((item, index) => {
        col.push(
            <div className="w3-col m6 w3-padding">
                <button className="w3-btn w3-white w3-border w3-border-blue w3-round-xxlarge" 
                        style={{"width": "70%", "minWidth": "250px"}}
                        onClick={()=>{setVerse(index)}}
                >
                            ... {item.name}
                </button>
            </div>
        );

        if ((index+1)%2 == 0){
            row = 
                <div className="w3-row-padding">
                    {col}
                </div>;

            list.push(row);
            col = [];
            row = [];
        }
    });

    return(
        <div className="w3-container w3-padding w3-center">
            {list}
        </div>
    );
}

export default Moods;