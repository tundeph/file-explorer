//types
import { OptionsProps } from "../../models/Display.types"

//styles
import { SortContainer } from "../styles"

const Search = ({ options, handleSortBy }: OptionsProps) => {
  return (
    <SortContainer>
      <h3> Sort: </h3>
      {options &&
        options.map((option, i) => {
          return (
            <label htmlFor={option.title} key={i}>
              {option.title}
              <input
                type="checkbox"
                name="sort"
                value={option.value}
                checked={option.checked}
                onChange={handleSortBy}
                data-testid="checkbox"
              />
            </label>
          )
        })}
    </SortContainer>
  )
}

export default Search
