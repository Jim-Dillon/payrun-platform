import { useState, useEffect } from 'react';
import { Table } from 'antd';
import { columns, data } from './PayrunData';

const DataTable = ({ onSelectChange }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(data.map(item => item.key));

  useEffect(() => {
    onSelectChange(selectedRowKeys);
  }, [selectedRowKeys, onSelectChange]);

  const onRowSelectionChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
    onSelectChange(selectedKeys);
  };

  const onSelectAllChange = (e) => {
    const keys = e.target.checked ? data.map(item => item.key) : [];
    setSelectedRowKeys(keys);
    onSelectChange(keys);
  };

  const columnsWithCheckbox = [
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
              onRowSelectionChange(newSelectedRowKeys, []);
            }}
            aria-label="Checkbox 1"
          />
        </label>
      ),
    },
    ...columns
  ];

  return (
    <>
      <Table
        columns={columnsWithCheckbox}
        dataSource={data}
        scroll={{ x: 1300 }}
        rowSelection={{
          selectedRowKeys,
          onChange: onRowSelectionChange,
        }}
      />
    </>
  );
};

export default DataTable;
