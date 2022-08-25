import React from 'react';
import './style.css';

function VerseDisplay(props){
    return(
    <div className="w3-container w3-animate-opacity">
        <div className="w3-content">
            <div className=" w3-hide-small">
                <h1 className="font-dancing w3-justify">&#10077;{props.verse.content}&#10078;</h1>
                <br/><br/>
                <div className="w3-text-grey w3-opacity w3-right"><i>{props.verse.source}</i></div>
            </div>

            <div className=" w3-hide-large w3-hide-medium">
                <h3 className="font-dancing w3-justify">&#10077;{props.verse.content}&#10078;</h3>
                <br/><br/>
                <div className="w3-text-grey w3-opacity w3-right"><i>
                    {props.verse.source.split(',')[0] + " " + props.verse.source.split(',')[1].split(' ')[2] + ":" + props.verse.source.split(',')[2].split(' ')[2]}
                </i></div>
            </div>
            
            
            
            
        </div>
    </div>
    );
}

export default VerseDisplay;