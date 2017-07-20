import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
    const startId = products.length;
    for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
            id: id,
            type: 'aaa',
            name: 'Item name ' + id,
            price: 2100 + i,
            validDate: '312312',
            stock: '1111',
            operation: ''
        });
    }
}

addProducts(5);

export default class CouponList extends React.Component {
    render() {
        return (
            <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='type'>卡券类型</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>卡券名称</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>卡券金额</TableHeaderColumn>
          <TableHeaderColumn dataField='validDate'>卡券有效期</TableHeaderColumn>
          <TableHeaderColumn dataField='stock'>库存</TableHeaderColumn>
          <TableHeaderColumn dataField='operation'>操作</TableHeaderColumn>
      </BootstrapTable>
        );
    }
}