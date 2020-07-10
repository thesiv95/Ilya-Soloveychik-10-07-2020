import React from 'react';
import TotalEntries from './StatusBar/TotalEntries';

export default class StatusBar extends React.Component {
    render() {
        return (
            <div className="container" id="status-bar">
                <div className="row">
                    <div className="col-md-9">
                        <TotalEntries  />
                    </div>
                    <div className="col-md-3">
                        <button id="createNew" className="btn btn-success">
                            משימה חדשה
                        </button>
                    </div>
                </div>
            </div>
        )
        // TODO: props
    }
}