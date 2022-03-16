import React, { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { Options } from "../../models/Display.types"

//components
import File from "../../components/File"
import Folder from "../../components/Folder"
import Notification from "../../components/Notification"
import Search from "./Search"

//styles
import { Container, SearchContainer, Title } from "../styles"

//helper
import {
  nameAscending,
  nameDescending,
  dateAscending,
  dateDescending,
  flattenArray,
} from "../../helper/helper"
import SearchBar from "../../components/SearchBar"

const options: Options = [
  {
    title: "Name",
    value: "name",
    asc: nameAscending,
    desc: nameDescending,
    checked: false,
  },
  {
    title: "Date",
    value: "added",
    asc: dateAscending,
    desc: dateDescending,
    checked: false,
  },
]

const Display = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/data")

  //states
  const [sorted, setSorted] = useState<any[]>(options)
  const [filterText, setFilterText] = useState<string>("")

  const handleSortBy = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosen = options
      .map((option) => {
        if (option.value === e.target.value) {
          option.checked = e.target.checked
          return option
        } else {
          option.checked = false
          return option
        }
      })
      .filter((option) => option.value === e.target.value)

    e.target.checked ? data?.sort(chosen[0].asc) : data?.sort(chosen[0].desc)
    setSorted(chosen)
  }

  const filteredData = (data: any[], filterText: any) => {
    if (filterText.length > 0) {
      return flattenArray(data).filter((d: { name: string }) =>
        d.name.toLowerCase().includes(filterText.toLocaleLowerCase())
      )
    } else {
      return data
    }
  }

  return (
    <Container>
      <Title> File Explorer </Title>
      {isPending && <Notification>Loading...</Notification>}
      {error && <Notification>Error loading files/folders </Notification>}

      {data && (
        <>
          <div>
            <SearchContainer>
              <Search options={options} handleSortBy={handleSortBy} />
              <SearchBar
                filterText={filterText}
                setFilterText={setFilterText}
              />
            </SearchContainer>
          </div>
          {filteredData(data, filterText).map((eachData: any, i: number) => (
            <React.Fragment key={i}>
              {eachData.type === "folder" ? (
                <Folder value={eachData} />
              ) : (
                <File value={eachData} />
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </Container>
  )
}

export default Display
