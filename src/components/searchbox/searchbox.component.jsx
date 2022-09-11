import './searchbox.styles.scss'
import searchIcon from '../../assets/search-icon.png'

export const SearchBox = ({placeholder,onChangeHandeler}) => {

    return(
        <div className="search-box-container">
            <img src={searchIcon} alt="search-icon" className='search-icon'/>
            <input 
            placeholder={placeholder}
            className="searchbox"
            type='search'
            onChange={onChangeHandeler}/>
        </div>
    )
}