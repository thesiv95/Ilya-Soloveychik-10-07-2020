import React from 'react';
import TotalEntries from './StatusBar/TotalEntries';

interface IProps {
}

interface IState {
    newEntry?: any;
    totalEntries?: number
}

export default class StatusBar extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);
        this.state = {
            totalEntries: 0,
            newEntry: null
        }
    }

    fetchAll = () => {
        fetch('http://localhost:3000/get-all')
        .then(result => result.json())
        .then(data => this.setState({
            totalEntries: data.length
        }));
    }
    
    componentDidMount(){
        this.fetchAll();
    }

    componentDidUpdate(){
        this.fetchAll();
    }

    componentWillUnmount(){
        this.setState({
            newEntry: null
        })
    }

    addNewEntry = () => {
        let name = prompt('שם משתמש', 'שם משתמש');
        let phone = prompt('טלפון', '0526589295');
        let email = prompt('מייל', 'name@doamin.com');
        let text = prompt('טקסט משימה', 'הוסף משימה חדשה');

        let params = `?name=${name}&phone=${phone}&email=${email}&text=${text}`;
       //let params = '?name=Abo&phone=222222&email=ddd@ss.ss&text=sasa'

        fetch(`http://localhost:3000/create${params}`, {
            method: 'POST'
        }).then(data => this.setState({
            newEntry: data
        }));

        window.location.reload();
    }

    render() {
        return (
            <div className="container" id="status-bar">
                <div className="row">
                    <div className="col-md-9">
                        <TotalEntries totalEntries={this.state.totalEntries} />
                    </div>
                    <div className="col-md-3">
                        <button id="createNew" onClick={this.addNewEntry} className="btn btn-success">
                            משימה חדשה
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}