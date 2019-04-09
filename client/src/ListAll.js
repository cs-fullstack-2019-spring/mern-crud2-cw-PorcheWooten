import React, { Component } from 'react';



class ListAll extends Component {

    render() {
        let items = [];
        let holdThis = items.map(
            (eaRSVP)=>{
                return(<div key={eaRSVP.rsvp_person}>
                    <p>Name: {eaRSVP.rsvp_person}</p>
                    <p>RSVP: {eaRSVP.rsvp_going}</p>
                        </div>)
            }
        );
        return (
            <div className="App">
              {holdThis}
            </div>
        );
    }
}

export default ListAll;