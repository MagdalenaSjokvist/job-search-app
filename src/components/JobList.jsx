import React from "react"
import JobListItem from "../components/JobListItem"

export default function JobList({ joblist }) {
	return (
		<div className="search-result-container">
			{joblist && joblist.length > 0
				? joblist.map((job) => {
						const id = job.id
						return <JobListItem key={id} job={job} id={id} />
				  })
				: joblist && (
						<p className="message-no-result">
							Sorry, couldn't find a matching job &#x1F61E;
						</p>
				  )}
		</div>
	)
}
