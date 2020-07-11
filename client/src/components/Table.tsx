import React from 'react';
import Controls from './Table/Controls';

interface IProps {
}

interface IState {
    data?: string[],
    statusUpdated?: boolean
}

export default class Table extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);
        this.state = {
            data: [],
            statusUpdated: false,
        }
       // this.refs = React.createRef();
    }

    componentDidMount(){
        console.log('rable')
        fetch('http://localhost:3000/get-all')
            .then(response => response.json())
            .then(data => this.setState({
                data
            }))
    }

    updateStatus = () => {
        
        //console.log(this.statusBlock.current);
        // let newStatus: number = 0;
        // if (document.querySelector('#status')?.getAttribute('class') === 'hide-status'){
        //     newStatus = 1;
        // }
        //     fetch(`http://localhost:3000/updateTaskStatus?id=${taskId}&newStatus=${newStatus}`, {
        //         method: 'POST'
        //     }).then(
        //         response => this.setState({
        //             statusUpdated: true
        //         })
        //     )
        
    }

    render(){
        return (
                <table className="table">
                    <thead>
                        <tr className="table-active">
                            <th scope="col">שם משתמש</th>
                            <th scope="col">טלפון</th>
                            <th scope="col">טקסט משימה</th>
                            <th scope="col">מייל</th>
                            <th scope="col">תאריך יצירת המשימה</th>
                            <th scope="col">פעולות</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.data?.map((item: any, index: number) =>
                            <tr key={index} data-id={item.id}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.text}</td>
                                <td>
                                    <span className="status" title="לחץ כדי לשנות סטטוס">
                                        <span role="img" 
                                            className={item.done === 1 ? 'show-status' : 'hide-status'} 
                                            aria-label="(done)">✔️</span>
                                        <span role="img" 
                                            className={item.done === 1 ? 'hide-status' : 'show-status'}
                                        aria-label="(not_done)">❌</span>
                                        <span>{item.date.slice(0, 10)}</span>
                                    </span>
                                </td>
                                <td>
                                    <Controls id={item.id} />
                                </td>
                            </tr>
                           )}
                    </tbody>
                </table>
        )
    }
}