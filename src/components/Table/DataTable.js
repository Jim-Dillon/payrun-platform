import { useState } from 'react';
import { Table } from 'antd';
import { columns as initialColumns, data } from './PayrunData';
import Checkbox from '../Checkbox/Checkbox';

const DataTable = ({ onSelectChange }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onRowSelectionChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
    onSelectChange(selectedKeys);
  };

  const onSelectAllChange = (e) => {
    const keys = e.target.checked ? data.map(item => item.key) : [];
    setSelectedRowKeys(keys);
    onSelectChange(keys);
  };

  const columns = [
    {
      title: (
        <Checkbox
          checked={selectedRowKeys.length === data.length}
          onChange={onSelectAllChange}
        />
      ),
      dataIndex: 'select',
      key: 'select',
      fixed: 'left',
      width: 5,
      render: (text, record) => (
        <Checkbox
          checked={selectedRowKeys.includes(record.key)}
          onChange={() => {
            const newSelectedRowKeys = selectedRowKeys.includes(record.key)
              ? selectedRowKeys.filter(key => key !== record.key)
              : [...selectedRowKeys, record.key];
            setSelectedRowKeys(newSelectedRowKeys);
            onRowSelectionChange(newSelectedRowKeys);
          }}
        />
      ),
    },
    ...initialColumns,
  ];

  return (
    <Table 
        columns={columns}
        dataSource={data}
        scroll={{ x: 1300 }}
        rowSelection={{
          selectedRowKeys,
          onChange: onRowSelectionChange,
        }}
    />
  );
};

export default DataTable;