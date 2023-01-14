import React, { useState, useContext } from "react"

import { ExplorerContext } from "../../context/ExplorerContext"

//components
import File from "@components/File"
import Folder from "../../components/Folder"
import Notification from "../../components/Notification"
import Search from "./Search"
import SearchBar from "../../components/SearchBar"

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

export const options = {
	name: {
		title: "Name",
		value: "name",
		asc: nameAscending,
		desc: nameDescending,
		checked: false,
	},
	added: {
		title: "Date",
		value: "added",
		asc: dateAscending,
		desc: dateDescending,
		checked: false,
	},
}

const Display = () => {
	const { data, isPending, error, dispatch } = useContext(ExplorerContext)

	//states
	const [filterText, setFilterText] = useState<string>("")

	//function to sort files
	const handleSortBy = (e: React.ChangeEvent<HTMLInputElement>) => {
		const chosen = Object.values(options).map((option) => {
			if (option.value === e.target.value) {
				option.checked = e.target.checked
				option.checked ? data?.sort(option.asc) : data?.sort(option.desc)
				return option
			} else {
				option.checked = false
				return option
			}
		})

		dispatch({ type: "GET_DATA", payload: data })
	}

	//function to filter files with the input form
	const filteredData = (data: any[], filterText: any) => {
		if (filterText.trim().length > 0) {
			return flattenArray(data).filter((d: { name: string }) =>
				d.name.toLowerCase().includes(filterText.trim().toLowerCase())
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
					<SearchContainer>
						<Search options={options} handleSortBy={handleSortBy} />
						<SearchBar filterText={filterText} setFilterText={setFilterText} />
					</SearchContainer>

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
