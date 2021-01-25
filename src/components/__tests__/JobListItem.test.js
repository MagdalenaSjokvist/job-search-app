import { shallow, mount } from "enzyme"
import JobListItem from "../JobListItem"

describe("Test JobListItem", () => {
	const job = {
		id: "1",
		title: "title",
		type: "type",
		description: "description",
		company: "company",
		company_url: "company url",
		company_logo: "company logo",
	}

	it("renders correctly", () => {
		const wrapper = shallow(<JobListItem job={job} />)
		expect(wrapper.find("div").exists()).toBe(true)
	})
	it("renders job title in a <h2> element", () => {
		const wrapper = shallow(<JobListItem job={job} />)
		expect(wrapper.find("h2").text()).toBe("title")
	})
	it("renders job type in a <strong> element", () => {
		const wrapper = shallow(<JobListItem job={job} />)
		expect(wrapper.find("strong").text()).toBe("type")
	})
	it("renders job description in a <div> element", () => {
		const wrapper = mount(<JobListItem job={job} />)
		expect(wrapper.find("div div").text()).toBe("description")
	})
	it("renders job company url in an <a> element", () => {
		const wrapper = shallow(<JobListItem job={job} />)
		expect(wrapper.find("a").prop("href")).toBe("company url")
	})
	it("renders a 'Back'-button when having the prop 'detailpage'", () => {
		const wrapper = shallow(<JobListItem job={job} detailpage />)
		expect(wrapper.find("button").text()).toBe("Back")
	})
	it("renders a 'Read more'-button when missing the prop 'detailpage'", () => {
		const wrapper = shallow(<JobListItem job={job} />)
		expect(wrapper.find("button").text()).toBe("Read more")
	})
})
