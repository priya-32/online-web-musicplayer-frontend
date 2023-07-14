import { useState } from "react";
import './Search.css';
var data = require("./MOCK_DATA.json");

export default function SearchBar() {
    const [value, setValue] = useState("");

    const onChange = (event) => {
      setValue(event.target.value);
    };
  
    const onSearch = (searchTerm) => {
      setValue(searchTerm);
      // our api to fetch the search result
      console.log("search ", searchTerm);
    };
    return(
        
        <div className='ssearch'>
        <div class="searchBox">
            <input class="searchInput"type="text" name="" placeholder="Search" value={value} onChange={onChange}/>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
        </div>
   
    );
}
