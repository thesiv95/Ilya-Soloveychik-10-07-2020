import React from 'react';

interface IProps {
    id?: number;
}

interface IState {
    
}

export default class Controls extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);
        this.state = {
            edited: false,
            deleted: false
        }
    }

    btnViewHandler = () => {
        let taskId = this.props.id; // id from table
        fetch(`http://localhost:3000/view?id=${taskId}`)
            .then(res => res.text())
            .then(data => {
                alert(data);
            });
    }

    btnEditHandler = () => {
        let taskId = this.props.id;
        let newTask = prompt('שנה את טקסט המשימה', 'טקסט חדש');
        if (newTask){
            fetch(`http://localhost:3000/update?id=${taskId}&newTask=${newTask}`, {
                method: 'POST'
            }).then(res => {
                this.setState({
                    edited: true
                })
            })
        }
    }

    btnDeleteHandler = () => {
        let taskId = this.props.id;
        
        fetch(`http://localhost:3000/delete?id=${taskId}`, {
            method: 'POST'
        }).then(res => {
            
            this.setState({
                deleted: true
            })
        }).finally(() => {alert('המשימה נמחקה בהצלחה')});
    }

    componentDidUpdate(){
        console.log('update')
    }

    render(){
        return (
            <div className="btn-group" role="group">
                <button type="button" className="btn" onClick={this.btnViewHandler}>
                    <span role="img" aria-label="view">👁️</span>
                    צפייה
                </button>
                <button type="button" className="btn" onClick={this.btnEditHandler}>
                <span role="img" aria-label="edit">🖊️</span>
                    עריכה
                </button>
                <button type="button" className="btn">
                    <span role="img" aria-label="delete" onClick={this.btnDeleteHandler}>🗑️</span>
                    מחיקה
                </button>
            </div>
        )
    }
}