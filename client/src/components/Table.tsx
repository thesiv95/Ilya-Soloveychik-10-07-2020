import React from 'react';
import Controls from './Table/Controls';

export default class Table extends React.Component {

    changeStatus = () => {
        console.log('change status')
    }

    render(){
        return (
                <table className="table">
                    <thead>
                        <tr className="table-active">
                            <th scope="col">שם משתמש</th>
                            <th scope="col">טלפון</th>
                            <th scope="col">מייל</th>
                            <th scope="col">תאריך יצירת המשימה</th>
                            <th scope="col">פעולות</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr data-id="1">
                            <td>שם משתמש</td>
                            <td>0526589295</td>
                            <td>name@doamin.com</td>
                            <td>
                                <span className="tick" title="לחץ כדי לשנות סטטוס">
                                    <span role="img" aria-label="(done)">✔️</span>
                                </span>
                                2020-01-01
                            </td>
                            <td>
                                <Controls />
                            </td>
                        </tr>
                    </tbody>
                </table>
        )
    }
}