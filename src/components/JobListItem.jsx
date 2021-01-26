import React from "react"
import { useHistory } from "react-router-dom"

export default function JobListItem({ job, id, detailpage }) {
	let jobDescription = job.description
	const history = new useHistory()

	function renderDescription() {
		if (!detailpage && jobDescription.length > 400) {
			jobDescription = `${jobDescription.substring(0, 400)}...`
		}
		return { __html: jobDescription }
	}

	return (
		<div className="job-item-container">
			<h2 className="job-title">{job.title}</h2>
			<p className="job-type">
				<strong>{job.type}</strong>
			</p>
			<div
				className="job-description"
				dangerouslySetInnerHTML={renderDescription()}
			/>
			{job.company_url && (
				<a href={job.company_url} className="company-url">
					{job.company_url}
				</a>
			)}
			<img src={job.company_logo} className="company-logo"></img>
			{!detailpage && (
				<button
					className="read-more-btn"
					onClick={() => {
						history.push(`/jobs/${id}`)
					}}
				>
					Read more
				</button>
			)}
			{detailpage && (
				<button
					className="back-btn"
					onClick={() => {
						window.history.back()
					}}
				>
					Back
				</button>
			)}
		</div>
	)
}
