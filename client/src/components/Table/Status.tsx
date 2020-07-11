import React, {createRef} from 'react';

interface IProps {
    id?: number,
    statusIndex?: number
}

interface IState {
    status?: string
}

export default class Status extends React.Component<IProps, IState> {

    private spanRef = createRef<HTMLSpanElement>();

    constructor(props: IProps){
        super(props);
        this.state = {
            status: '0'
        }
    }

    updateStatus = () => {
        let currentSpan = this.spanRef.current;
        let taskId = currentSpan?.getAttribute('data-id');
        let taskStatus = currentSpan?.getAttribute('data-status-index');
        
        // we change data status index first
        if (taskStatus === '0') {
            taskStatus = '1';
        } else if (taskStatus === '1') {
            taskStatus = '0';
        };

        console.log(taskStatus);

        fetch(`http://localhost:3000/updateTaskStatus?id=${taskId}&newStatus=${taskStatus}`, {
            method: 'POST'
        }).then(res => this.setState({
            status: '1' // just to change
        }))

        window.location.reload();

    }

    render() {
        return (
            <span title="לחץ כדי לשנות סטטוס" onClick={this.updateStatus} ref={this.spanRef} data-id={this.props.id} data-status-index={this.props.statusIndex}>
                <span role="img"
                    className={this.props.statusIndex === 1 ? 'show-status' : 'hide-status'}
                    aria-label="(done)">✔️</span>
                <span role="img"
                    className={this.props.statusIndex === 1 ? 'hide-status' : 'show-status'}
                    aria-label="(not_done)">❌</span>
            </span>
        )
    }
}