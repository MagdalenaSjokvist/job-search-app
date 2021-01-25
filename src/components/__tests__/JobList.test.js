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
	it("renders <JobListItem/> when joblist array contains any job items", () => {
		const wrapper = mount(<JobList joblist={jobList} />)
		expect(wrapper.find(JobListItem).exists()).toBe(true)
	})
	it("renders 'couldn't find a matching job' when joblist array is empty", () => {
		const wrapper = mount(<JobList joblist={emptyJobList} />)
		expect(wrapper.find("p").text()).toContain("couldn't find a matching job")
	})
})
