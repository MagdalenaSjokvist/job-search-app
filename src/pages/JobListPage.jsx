import React from "react"
import JobList from "../components/JobList"
import JobSearchForm from "../components/JobSearchForm"

export default function JobListPage() {
	return (
		<div>
			<h1>Job List Page</h1>
			<JobSearchForm />
			<JobList />
		</div>
	)
}
