import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Search from "../Search"
import { options } from "../Display"

describe("Search Component Tests", () => {
  it("should render checkbox on the page", () => {
    render(<Search options={options} handleSortBy={jest.fn} />)
    const selectElement = screen.getAllByRole("checkbox")
    expect(selectElement).toBeTruthy()
  })

  it("should click only one checkbox per time", () => {
    render(<Search options={options} handleSortBy={jest.fn} />)
    const nameSelectElement = screen.getByTestId("name")
    const addedSelectElement = screen.getByTestId("added")
    fireEvent.click(nameSelectElement)
    expect(addedSelectElement).not.toBeChecked()
  })
})
