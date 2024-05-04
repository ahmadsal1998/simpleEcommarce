import React from "react";
import { BsArrowDownRight,BsArrowUpRight }  from 'react-icons/bs';
import { Column } from '@ant-design/plots';
import { Table } from 'antd';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'staus',
  },
];
const data1 = [];
for (let i = 0; i<46; i++){
  data1.push({
    key: i,
    name:`Ahmad sal ${i}`,
    product:32,
    staus:`Palestine. ${i}`,
  })
}

const Dashboard = () => {
  
  const data = [
    { month: '1', value: 1078 },
    { month: '2', value: 1216 },
    { month: '3', value: 758 },
    { month: '4', value: 623 },
    { month: '5', value: 319 },
    { month: '6', value: 422 },
    { month: '7', value: 4 },
    { month: '8', value: 217 },
    { month: '9', value: 58 },
    { month: '10', value: 1513 },
    { month: '11', value: 1388 },
    { month: '12', value: 597 },
  ];
  
 
    const config = {
      data,
      xField: 'month',
      yField: 'value',
      color: ({ type }) => {
 
        return '#ffd333';
      },
      scale: {
        y: {
          domainMax: 2000,
          domainMin: -1000,
        },
      },
      axis: {
        x: {
          labelFormatter: (val) => `${val} 月`,
        },
      },
      annotations: [
        {
          type: 'rangeX',
          data: [{ month: ['7', '9'] }],
          xField: 'month',
        },
      ],
    
  };
  
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p> <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6> <BsArrowDownRight /> 32%</h6>
            <p className="mb-0 desc">Compared To April 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p> <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red"> <BsArrowDownRight /> 32%</h6>
            <p className="mb-0 desc">Compared To April 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p> <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green"> <BsArrowDownRight /> 32%</h6>
            <p className="mb-0 desc">Compared To April 2023</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Income Statics</h3>
        <div>
        <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Recent Orders</h3>
        <div>
        <Table 
  
        columns={columns}
        dataSource={data1} 
        />
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
//        <Column {...config} />
