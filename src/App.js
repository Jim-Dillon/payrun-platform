import TopNav from './components/TopNav/TopNav';
import StickyNav from './components/StickyNav/StickyNav';
import DataTable from './components/Table/DataTable';
import './components/Table/TableSection.scss'
import { arrow } from './components/Table/Arrow'



const App = () => {
    return (
        <>
            <TopNav />
            <StickyNav />
            <main>
                <div className="tableSection">
                    <div className="invoiceTotalContainer">
                        <div className="invoiceTotal">
                            30 new invoices
                        </div>
                        {arrow}
                    </div>
                    <DataTable/>
                </div>
            </main>
        </> 
    )
}

export default App;
