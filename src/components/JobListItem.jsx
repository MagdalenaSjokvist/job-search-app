import React from "react"
import { Link, useHistory } from "react-router-dom"

export default function JobListItem({ job, id }) {
	let jobDescription = job.description
	const history = new useHistory()

	function renderDescription() {
		if (jobDescription.length > 400) {
			jobDescription = `${jobDescription.substring(0, 400)}...`
		}
		return { __html: jobDescription }
	}

	return (
		<div>
			<Link to={`/jobs/${id}`}>
				<h2>{job.title}</h2>
			</Link>
			<p>
				<strong>{job.type}</strong>
			</p>
			<div dangerouslySetInnerHTML={renderDescription()} />
			{job.company_url && <a href={job.company_url}>{job.company} website</a>}
			<img src={job.company_logo}></img>
			<button
				onClick={() => {
					history.push(`/jobs/${id}`)
				}}
			>
				Read more
			</button>
		</div>
	)
}
