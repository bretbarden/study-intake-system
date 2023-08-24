import React, {useState} from 'react'

function SearchBar () {

        const [selectedCategory, setSelectedCategory] = useState("All");
      
        function handleCategoryChange(event) {
          setSelectedCategory(event.target.value);
        }
      
        //Set state for the search bar
        const [search, setSearch] = useState("")
      
        function handleSearch(e) {
          setSearch(e.target.value)
        }
      
        const itemsToDisplay = 
          items.filter((item) => selectedCategory === "All" ? true : item.category === selectedCategory)
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          
      
        return (
          <div className="ShoppingList">
            <ItemForm />
            <Filter onCategoryChange={handleCategoryChange} onSearchChange = {handleSearch}/>
            <ul className="Items">
              {itemsToDisplay.map((item) => (
                <Item key={item.id} name={item.name} category={item.category} />
              ))}
            </ul>
          </div>
        );
}


export default SearchBar