import React from 'react';

function Moods(props){
    let col = new Array(), row = new Array(), list = new Array();

    props.verses.map((item, index) => {
        col.push(
            <div className="w3-col m6 w3-padding">
                <button className="w3-btn w3-white w3-border w3-border-black w3-round-xlarge w3-large" 
                        style={{"width": "70%", "minWidth": "250px", "outline":"0"}}
                        onClick={()=>{props.randomVerse(index)}}
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