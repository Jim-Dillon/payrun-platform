import { useState } from 'react';
import { Table } from 'antd';
import { columns as initialColumns, data } from './PayrunData';

const DataTable = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState(data.map(item => item.key));

    const onSelectAllChange = e => {
        const isChecked = e.target.checked;
        setSelectedRowKeys(isChecked ? data.map(item => item.key) : []);
      };
    
      const onRowSelectionChange = (selectedKeys) => {
        setSelectedRowKeys(selectedKeys);
      };

    const columns = [
        {
          title: (
            <input
              type="checkbox"
              checked={selectedRowKeys.length === data.length}
              onChange={onSelectAllChange}
            />
          ),
          dataIndex: 'select',
          key: 'select',
          fixed: 'left',
          width: 40,
          render: (text, record) => (
            <input
              type="checkbox"
              checked={selectedRowKeys.includes(record.key)}
              onChange={() => {
                const newSelectedRowKeys = selectedRowKeys.includes(record.key)
                  ? selectedRowKeys.filter(key => key !== record.key)
                  : [...selectedRowKeys, record.key];
                setSelectedRowKeys(newSelectedRowKeys);
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
    />
  )
}

export default DataTable