import React from 'react';

export default class Controls extends React.Component {
    render(){
        return (
            <div className="btn-group" role="group">
                <button type="button" className="btn">
                    <span role="img" aria-label="view">👁️</span>
                    צפייה
                </button>
                <button type="button" className="btn">
                <span role="img" aria-label="edit">🖊️</span>
                    עריכה
                </button>
                <button type="button" className="btn">
                    <span role="img" aria-label="delete">🗑️</span>
                    מחיקה
                </button>
            </div>
        )
    }
}