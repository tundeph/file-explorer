import { SearchBarProps } from "../models/Display.types"
import { FormContainer } from "../pages/styles"
import { Search } from "@styled-icons/boxicons-regular/Search"

const SearchBar = ({ filterText, setFilterText }: SearchBarProps) => {
  return (
    <FormContainer>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => {
          setFilterText(e.target.value)
        }}
      />
      <Search />
    </FormContainer>
  )
}

export default SearchBar
