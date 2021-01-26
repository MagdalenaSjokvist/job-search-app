import React, { useState, useEffect, useContext } from "react"
import { JobContext } from "../contexts/JobContext"

export default function JobSearchForm() {
	const [searchTerm, setSearchTerm] = useState("")
	const { setJobList } = useContext(JobContext)
	const { searchHistory, setSearchHistory } = useContext(JobContext)

	function handleOnClick() {
		//1. Om searchHistory inte är tom - kolla om searchTerm matchar tidigare sökningar
		if (searchHistory.length > 0) {
			let matchingSearch

			//a) Loopa igenom searchHistory för att spara ev. matchande objekt i variabeln matchingSearch
			searchHistory.forEach((obj) => {
				if (obj.term === searchTerm) {
					matchingSearch = obj
				}
			})

			//b) Om sökningen finns - sätt jobList(=sökresultatet) till det matchande objektets jobblista (matchingSearch.jobs)
			if (matchingSearch?.term && matchingSearch.term === searchTerm) {
				setJobList(matchingSearch.jobs)
			} else {
				fetchJobList()
			}

			//2. Om searchHistory är tom (dvs vid första sökningen) - kör fetchJobList() direkt
		} else {
			fetchJobList()
		}

		//3. Töm inputfältet efter varje sökning
		setSearchTerm("")
	}

	function fetchJobList() {
		const convertedSearchTerm = searchTerm.replace(" ", "+")
		const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${convertedSearchTerm}/`
		fetch(url)
			.then((res) => res.json())
			.then((data) => updateSearchHistory(data))
	}

	//Körs efter varje ny fetch
	function updateSearchHistory(data) {
		//1. Sätt först jobList till sökresultatet(=data)
		setJobList(data)
		//2. Spara sökresultatet i searchHistory
		if (!searchHistory) {
			setSearchHistory([{ term: searchTerm, jobs: data }])
		} else {
			setSearchHistory((prevState) => [
				...prevState,
				{ term: searchTerm, jobs: data },
			])
		}
	}

	return (
		<div className="search-container">
			<input
				type="search"
				placeholder="What kind of job are you looking for?"
				value={searchTerm}
				onChange={(event) => setSearchTerm(event.target.value)}
			/>
			<button className="search-btn" onClick={handleOnClick}>
				Search
			</button>
		</div>
	)
}
