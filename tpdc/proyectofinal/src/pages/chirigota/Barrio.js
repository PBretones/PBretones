import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Tupase } from '../../components/Categories/Tupase';


export const Barrio = () => {
    return (
        <>
            <div className="creator">
                <Sidebar />
                <Tupase children="LBARRIO" />
            </div>
        </>
    );
}


