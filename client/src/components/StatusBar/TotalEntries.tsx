import React from 'react';

interface IProps {
    totalEntries?: number;
}

interface IState {
    
}

export default class TotalEntries extends React.Component<IProps, IState> {
    
    render() {
        return (
                <div className="col-md-9">
                   <h4 className="text-right">רשימת הלקוחות 
                   ({ this.props.totalEntries })</h4>
                </div>
        )
    }
}