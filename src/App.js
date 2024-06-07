import TopNav from './components/TopNav/TopNav';
import StickyNav from './components/StickyNav/StickyNav';
import DataTable from './components/Table/DataTable';
import './components/Table/TableSection.scss'
import { arrow } from './components/Table/Arrow'
import { useState, useEffect } from 'react';
import { data } from './components/Table/PayrunData';



const App = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState(data.map(item => item.key));
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(calculateTotalAmount(selectedRowKeys));
      }, []);

      const calculateTotalAmount = (selectedKeys) => {
        const selectedRows = data.filter(item => selectedKeys.includes(item.key));
        const total = selectedRows.reduce((acc, curr) => acc + parseFloat(curr.amount.replace(/,/g, '')), 0);
        return total;
      };

      const handleSelectChange = (selectedKeys) => {
        setSelectedRowKeys(selectedKeys);
        setTotalAmount(calculateTotalAmount(selectedKeys));
      };

    return (
        <>
            <TopNav />
            <StickyNav 
                selectedCount={selectedRowKeys.length} 
                selectedAmount={totalAmount} 
            />
            <main>
                <div className="tableSection">
                    <div className="invoiceTotalContainer">
                        <div className="invoiceTotal">
                            30 new invoices
                        </div>
                        <div className="invoiceTotalRight">
                            <p>Scroll to view more</p>
                            {arrow}
                        </div>
                    </div>
                    <DataTable
                        onSelectChange={handleSelectChange}
                    />
                </div>
            </main>
        </> 
    )
}

export default App;
