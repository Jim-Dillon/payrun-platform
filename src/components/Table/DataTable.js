import { useState, useEffect } from 'react';
import { Table } from 'antd';
import { columns as initialColumns, data } from './PayrunData';

const DataTable = ({ onSelectChange }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(data.map(item => item.key));

  useEffect(() => {
    // Notify parent component about initial selection
    onSelectChange(selectedRowKeys);
  }, []);

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
        <label className="checkbox">
          <input
            type="checkbox"
            checked={selectedRowKeys.length === data.length}
            onChange={onSelectAllChange}
            aria-label="Checkbox"
          />
        </label>
      ),
      dataIndex: 'select',
      key: 'select',
      fixed: 'left',
      width: 0,
      render: (text, record) => (
        <label>
          <input
            type="checkbox"
            checked={selectedRowKeys.includes(record.key)}
            onChange={() => {
              const newSelectedRowKeys = selectedRowKeys.includes(record.key)
                ? selectedRowKeys.filter(key => key !== record.key)
                : [...selectedRowKeys, record.key];
              setSelectedRowKeys(newSelectedRowKeys);
              onRowSelectionChange(newSelectedRowKeys);
            }}
            aria-label="Checkbox"
          />
        </label>
      ),
    },
    ...initialColumns.map(column => 
      column.dataIndex === 'amount' 
        ? { 
            ...column, 
            render: (text) => `£${parseFloat(text).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
          } 
        : column
    ),
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