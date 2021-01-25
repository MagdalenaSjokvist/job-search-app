import React, { useContext } from "react"
import JobList from "../components/JobList"
import JobSearchForm from "../components/JobSearchForm"
import { JobContext } from "../contexts/JobContext"

export default function JobListPage() {
	const { jobList } = useContext(JobContext)

	return (
		<div>
			<h1>Job List Page</h1>
			<JobSearchForm />
			<JobList joblist={jobList} />
		</div>
	)
}
