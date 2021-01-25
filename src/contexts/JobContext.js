import React, { useState, createContext } from "react"

export const JobContext = createContext({})

export default function JobContextProvider({ children }) {
	const [jobList, setJobList] = useState(null)

	return (
		<JobContext.Provider value={{ jobList, setJobList }}>
			{children}
		</JobContext.Provider>
	)
}
