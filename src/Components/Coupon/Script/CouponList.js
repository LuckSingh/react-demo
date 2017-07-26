import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Options from '../../Common/Script/Options'

const products = [];
//模拟假的数据
function addProducts(quantity) {
    const startId = products.length;
    for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
            id: id,
            name: 'Item name ' + id,
            price: 2100 + i
        });
    }
}

addProducts(3);

//操作组件 编辑删除
function actionFormatter(cell, row) {
    return <Options />;
}
//添加
function onAfterInsertRow(row) {
    console.log(row);
    let newRowStr = '';

    for (const prop in row) {
        newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row is:\n ' + newRowStr);
}

const options = {
    afterInsertRow: onAfterInsertRow // A hook for after insert rows
};
export default class FullyCustomDeleteButtonTable extends React.Component {
    render() {
        return (
            <BootstrapTable data={ products } insertRow={ true } options={ options }>
          <TableHeaderColumn dataField='id' isKey hidden export>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='action' dataFormat={ actionFormatter } export={ false }>Action</TableHeaderColumn>
      </BootstrapTable>
        );
    }
}