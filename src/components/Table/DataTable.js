import { useState, useEffect } from 'react';
import { Table, Modal } from 'antd'; // Import Modal from Ant Design
import { columns as initialColumns, data } from './PayrunData';

const DataTable = ({ onSelectChange }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(data.map(item => item.key));
  const [selectedRow, setSelectedRow] = useState(null); // Track selected row

  useEffect(() => {
    // Notify parent component about initial selection
    onSelectChange(selectedRowKeys);
  }, []);

  const onRowSelectionChange = (selectedKeys, selectedRows) => {
    setSelectedRowKeys(selectedKeys);
    onSelectChange(selectedKeys);
    setSelectedRow(selectedRows.length > 0 ? selectedRows[0] : null); // Set selected row
  };

  const onSelectAllChange = (e) => {
    const keys = e.target.checked ? data.map(item => item.key) : [];
    setSelectedRowKeys(keys);
    onSelectChange(keys);
  };

  const onCheckboxClick = (record) => {
    setSelectedRow(record); // Set selected row
    // Display popup message
    Modal.info({
      title: 'Selected Row',
      content: (
        <div>
          <p>Supplier Name: {record.supplierName}</p>
          <p>Invoice Ref #: {record.invoiceRef}</p>
          {/* Add other fields you want to display */}
        </div>
      ),
      onOk() {},
    });
  };

  const columns = [
    {
      title: (
        <label className="checkbox">
          <input
            type="checkbox"
            checked={selectedRowKeys.length === data.length}
            onChange={onSelectAllChange}
            aria-label="Checkbox 1"
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
            onClick={(e) => e.stopPropagation()} // Prevent row selection event from firing
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
    <>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1300 }}
        rowSelection={{
          selectedRowKeys,
          onChange: onRowSelectionChange,
        }}
        onRow={(record) => ({
          onClick: () => setSelectedRow(record),
        })}
      />
      {/* Display popup message when a row is selected */}
      {selectedRow && (
        <Modal
          title="Selected Row"
          open={!!selectedRow}
          onCancel={() => setSelectedRow(null)}
          onOk={() => setSelectedRow(null)}
        >
          <p>Supplier Name: {selectedRow.supplierName}</p>
          <p>Invoice Ref #: {selectedRow.invoiceRef}</p>
          {/* Add other fields you want to display */}
        </Modal>
      )}
    </>
  );
};

export default DataTable;
