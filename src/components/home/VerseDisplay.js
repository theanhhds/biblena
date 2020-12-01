import React from 'react';
import './style.css';

function VerseDisplay(props){
    return(
    <div className="w3-container w3-padding-large">
        <div className="w3-content w3-padding-large">
            <h2 className="font-dancing w3-justify">&#10077; {props.verse.content} &#10078;</h2>
            <br/><br/>
            <div className="w3-text-grey w3-opacity w3-right"><i>{props.verse.source}</i></div>
        </div>
    </div>
    );
}

export default VerseDisplay;