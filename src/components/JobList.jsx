import React, { useContext, useEffect, useState } from "react"
import JobListItem from "../components/JobListItem"
import { JobContext } from "../contexts/JobContext"

export default function JobList() {
	const { jobList } = useContext(JobContext)

	useEffect(() => {
		console.log(jobList)
	}, [jobList])

	return (
		<div>
			{jobList && jobList.length > 0
				? jobList.map((job) => {
						const id = job.id
						return <JobListItem key={id} job={job} id={id} />
				  })
				: jobList && <p>No jobs found</p>}
		</div>
	)
}
