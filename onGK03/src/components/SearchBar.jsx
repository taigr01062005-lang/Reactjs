import React from "react";

const SearchBar = ({onChange, inputRef}) => {
    return(
        <div style={{display:'flex', justifyContent: 'center', height: '30px', padding:'20px'}}>
            <input type="text"
                   ref = {inputRef}
                   placeholder="Search"
                   onChange = {(e) => {onChange(e.target.value)}}
            />
        </div>
    )
}
export default SearchBar