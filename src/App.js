import TopNav from './components/TopNav/TopNav';
import StickyNav from './components/StickyNav/StickyNav';
import DataTable from './components/Table/DataTable';
import './components/Table/TableSection.scss'
import { arrow } from './components/Table/Arrow'
import { useState } from 'react';
import { data } from './components/Table/PayrunData';



const App = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState(data.map(item => item.key));

    const onSelectChange = (selectedKeys) => {
        setSelectedRowKeys(selectedKeys);
      };

    return (
        <>
            <TopNav />
            <StickyNav selectedCount={selectedRowKeys.length} />
            <main>
                <div className="tableSection">
                    <div className="invoiceTotalContainer">
                        <div className="invoiceTotal">
                            30 new invoices
                        </div>
                        {arrow}
                    </div>
                    <DataTable
                        selectedRowKeys={selectedRowKeys}
                        onSelectChange={onSelectChange}
                    />
                </div>
            </main>
        </> 
    )
}

export default App;
