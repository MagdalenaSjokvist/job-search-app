import React, { useContext, useEffect, useState } from "react"
import JobListItem from "../components/JobListItem"

export default function JobList({ joblist }) {
	useEffect(() => {
		console.log(joblist)
	}, [joblist])

	return (
		<div>
			{joblist && joblist.length > 0
				? joblist.map((job) => {
						const id = job.id
						return <JobListItem key={id} job={job} id={id} />
				  })
				: joblist && <p>No jobs found</p>}
		</div>
	)
}
