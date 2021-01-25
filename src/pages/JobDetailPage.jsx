import React, { useState, useEffect } from "react"
import JobListItem from "../components/JobListItem"

export default function JobDetailPage(props) {
	const id = props.match.params.id
	const [job, setJob] = useState(null)

	function getJobDetails() {
		const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`
		fetch(url)
			.then((res) => res.json())
			.then((data) => setJob(data))
	}

	useEffect(() => {
		getJobDetails()
	}, [])

	return (
		<div>
			<h1>Job Detail Page</h1>
			{job && <JobListItem job={job} />}
		</div>
	)
}
