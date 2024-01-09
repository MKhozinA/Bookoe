import HeroSearch from "../Component/HeroSection/herosearch";
import SearchList from "../Component/Cards"
import { useSelector } from "react-redux"

const Search = () => {
  const keyword = useSelector((state) => state.search.keyword)
  const searchResults = useSelector((state) => state.search.searchResults)
  const filteringData = searchResults.slice(0, 4)

  return (
    <div className="App">
      <HeroSearch keyword={keyword} titleB={"Search for"}/>
      <SearchList bookData={filteringData} />
    </div>
  );
};

export default Search;
