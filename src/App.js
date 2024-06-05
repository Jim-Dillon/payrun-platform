import TopNav from './components/TopNav/TopNav';
import StickyNav from './components/StickyNav/StickyNav';
import DataTable from './components/Table/DataTable';
import './components/Table/TableSection.scss'
import { arrow } from './components/Table/Arrow'
import { useState } from 'react';
import { data } from './components/Table/PayrunData';



const App = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const calculateTotalAmount = (selectedKeys) => {
        const selectedRows = data.filter(item => selectedKeys.includes(item.key));
        const total = selectedRows.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
        return total;
      };

    return (
        <>
            <TopNav />
            <StickyNav 
                selectedCount={selectedRowKeys.length} 
                selectedAmount={calculateTotalAmount(selectedRowKeys)} />
            <main>
                <div className="tableSection">
                    <div className="invoiceTotalContainer">
                        <div className="invoiceTotal">
                            30 new invoices
                        </div>
                        {arrow}
                    </div>
                    <DataTable
                        onSelectChange={setSelectedRowKeys}
                    />
                </div>
            </main>
        </> 
    )
}

export default App;
