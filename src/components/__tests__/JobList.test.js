import { shallow, mount } from "enzyme"
import JobList from "../JobList"
import JobListItem from "../JobListItem"

describe("Test JobList", () => {
	const jobList = [
		{
			id: "1",
			title: "title",
			type: "type",
			description: "description",
			company: "company",
			company_url: "company_url",
			company_logo: "company_logo",
		},
		{
			id: "2",
			title: "title",
			type: "type",
			description: "description",
			company: "company",
			company_url: "company_url",
			company_logo: "company_logo",
		},
	]

	const emptyJobList = []

	it("renders correctly", () => {
		const wrapper = shallow(<JobList />)
		expect(wrapper.find("div").exists()).toBe(true)
	})
	it("renders <JobListItem/> when joblist contains any job items", () => {
		const wrapper = mount(<JobList joblist={jobList} />)
		expect(wrapper.find(JobListItem).exists()).toBe(true)
	})
	it("renders 'No jobs found' when joblist is empty", () => {
		const wrapper = mount(<JobList joblist={emptyJobList} />)
		expect(wrapper.find("p").text()).toBe("No jobs found")
	})
})
