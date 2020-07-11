import React from 'react';
import logo from '../logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h5 className="text-right">מסחר</h5> 
                    </div>
                    <div className="col-md-8">
                        <span className="header-phone-number">
                           <a href="tel:0779985041">077-9985041</a>
                        </span>
                        <span role="img" aria-label="phone">☎️</span>
                        
                    </div>
                    <div className="col-md-2">
                        <img src={logo} alt="PropIt" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-success text-right">ניהול משימות</h1>
                    </div>
                </div>
            </div>
        );
    }
}