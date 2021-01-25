import JobSearchForm from "../JobSearchForm"
import { shallow } from "enzyme"

describe("Test JobSearchForm", () => {
	it("renders correctly", () => {
		const wrapper = shallow(<JobSearchForm />)
		expect(wrapper.find("div").exists()).toBe(true)
	})
	it("renders input tag", () => {
		const wrapper = shallow(<JobSearchForm />)
		expect(wrapper.find("input").exists()).toBe(true)
	})
})
