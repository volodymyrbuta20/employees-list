import { useState } from "react";
import "./search-panel.css";

const SearchPanel = (props) => {

    const [term, setTerm] = useState('');

    const onChangeSearch = (e) => {
        const term = e.target.value;
        setTerm(term)
        props.onUpdateSearch(term);
    }

    return (
        <div>
            <input 
                className="form-control" 
                type="text" 
                placeholder="Search employee"
                onChange={onChangeSearch}
            />
        </div>
    );
}

export default SearchPanel;