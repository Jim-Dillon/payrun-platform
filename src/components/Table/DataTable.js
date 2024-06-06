import { useState, useEffect } from 'react';
import { Table, Modal } from 'antd';
import { columns as initialColumns, data } from './PayrunData';

const DataTable = ({ onSelectChange }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(data.map(item => item.key));
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    // Notify parent component about initial selection
    onSelectChange(selectedRowKeys);
  }, []);

  const onRowSelectionChange = (selectedKeys, selectedRows) => {
    setSelectedRowKeys(selectedKeys);
    onSelectChange(selectedKeys);
    setSelectedRow(selectedRows.length > 0 ? selectedRows[0] : null);
  };

  const onSelectAllChange = (e) => {
    const keys = e.target.checked ? data.map(item => item.key) : [];
    setSelectedRowKeys(keys);
    onSelectChange(keys);
  };

  const onCheckboxClick = (record) => {
    setSelectedRow(record); // Set selected row
    console.log(record);
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
              // No need to handle onChange for checkboxes, as we handle the click event directly
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent row selection event from firing

              // Find the corresponding record in the data array
              const selectedRecord = data.find(item => item.key === record.key);

              // Set selected row and call onCheckboxClick with the record
              setSelectedRow(selectedRecord); 
              onCheckboxClick(selectedRecord);
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
          <p>Do you want to exclude all invoices from {selectedRow.supplierName}</p>
          {/* Add other fields you want to display */}
        </Modal>
      )}
    </>
  );
};

export default DataTable;