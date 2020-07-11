import React from 'react';
import Controls from './Table/Controls';
import Status from './Table/Status';

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
      
    }

    componentDidMount(){
        fetch('http://localhost:3000/get-all')
            .then(response => response.json())
            .then(data => this.setState({
                data
            }))
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
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.text}</td>
                                <td>
                                    <span className="status">
                                        <Status id={item.id} statusIndex={item.done} />
                                    </span>
                                    <span>{item.date.slice(0, 10)}</span>
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