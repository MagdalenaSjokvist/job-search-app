import React, { useState, createContext } from "react"

export const JobContext = createContext({})

export default function JobContextProvider({ children }) {
	const [jobList, setJobList] = useState(null)
	const [searchHistory, setSearchHistory] = useState([])

	return (
		<JobContext.Provider
			value={{ jobList, setJobList, searchHistory, setSearchHistory }}
		>
			{children}
		</JobContext.Provider>
	)
}
