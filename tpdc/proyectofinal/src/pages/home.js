import { Sidebar } from '../components/Sidebar/Sidebar';
import { Categories } from '../components/Categories/Categories';



export const Home = () => {
    return (
        <>
            <div className="falla">
                <Sidebar />
                <Categories />
            </div>
        </>
    );
}



