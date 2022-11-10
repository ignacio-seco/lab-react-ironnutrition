import { Divider, Input } from 'antd';
import './Search.css';

//import { useState } from "react"

function Search(props) {
  //const [search,setSearch]=useState("")

  const handleSearchInput = (e) => {
    //console.log(`value before ${search}`);
    let value = e.target.value.toUpperCase();
    //setSearch(value)
    props.searchFood(value);
    //console.log(`value after ${value}`)
    //console.log(search)
  };

  return (
    <div className="searchStyle">
      <Divider>
        <label>
          <h2>Search food</h2>
        </label>
      </Divider>
      <Input className="searchBarr" type="text" onChange={handleSearchInput} />
    </div>
  );
}

export default Search;
