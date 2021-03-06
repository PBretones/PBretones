import { Sidebar } from '../components/Sidebar/Sidebar';
import { MusicPlayer } from '../components/MusicPlayer/MusicPlayer';

export const Player = () => {
    return (
        <>
            <div className="replayer">
                <Sidebar />
                <MusicPlayer />
            </div>
        </>
    );
}

