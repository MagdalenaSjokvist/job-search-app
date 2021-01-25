import React, { useState, useEffect, useContext } from "react"
import { JobContext } from "../contexts/JobContext"

export default function JobSearchForm() {
	const [searchString, setSearchString] = useState("")
	const { setJobList } = useContext(JobContext)

	function handleOnClick() {
		setSearchString(searchString.replace(" ", "+"))
		getJobList()
	}
	function getJobList() {
		const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${searchString}/`
		fetch(url)
			.then((res) => res.json())
			.then((data) => setJobList(data))
		setSearchString("")
	}

	return (
		<div>
			<input
				type="search"
				placeholder="What kind of job are you looking for?"
				value={searchString}
				onChange={(event) => setSearchString(event.target.value)}
			/>
			<button className="search-btn" onClick={handleOnClick}>
				Search
			</button>
		</div>
	)
}
