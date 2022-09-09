import './sidebar.styles.scss';

import { SearchBox } from '../searchbox/searchbox.component';



export const SideBar = () => {
    return(
        <div className="sidebar-container">
            <SearchBox />
        </div>
    );
};