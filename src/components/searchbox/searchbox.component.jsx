import './searchbox.styles.scss'
import searchIcon from '../../assets/search-icon.png'

export const SearchBox = () => {

    return(
        <div className="search-box-container">
            <img src={searchIcon} alt="search-icon" className='search-icon'/>
            <input placeholder="Search Passwords" className="searchbox"/>
        </div>
    )
}