//types
import { OptionsProps } from "../../models/Display.types"

const Search = ({ options, handleSortBy }: OptionsProps) => {
  return (
    <div>
      Sort By -
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
    </div>
  )
}

export default Search
