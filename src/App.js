import TopNav from './components/TopNav/TopNav';
import StickyNav from './components/StickyNav/StickyNav';
import DataTable from './components/Table/DataTable';


const App = () => {
    return (
        <>
            <TopNav />
            <StickyNav />
            <main>
                <div className="tableSection">
                    <DataTable/>
                </div>
            </main>
        </> 
    )
}

export default App;
