import { Table } from 'antd';
import { columns, data } from './PayrunData';

const DataTable = () => {
  return (
    <Table 
        columns={columns}
        dataSource={data}
        scroll={{ x: 1300 }}
    />
  )
}

export default DataTable