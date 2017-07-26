import React from 'react';
import '../Less/options'

export default class Options extends React.Component {
    render() {
        return (
            <div className='options'>
            <button className='btn btn-info'>修改</button>
            <button type="button" className="btn btn-warning react-bs-table-del-btn "><span><i className="glyphicon glyphicon-trash"></i>删除</span></button>
          </div>
        );
    }
}
