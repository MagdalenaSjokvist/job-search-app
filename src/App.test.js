import React from "react"
import { mount, shallow } from "enzyme"
import App from "./App"
import JobContextProvider from "./contexts/JobContext"
import { BrowserRouter } from "react-router-dom"

describe("Test App", () => {
	it("renders  correctly", () => {
		const wrapper = mount(
			<BrowserRouter>
				<JobContextProvider>
					<App />
				</JobContextProvider>
			</BrowserRouter>
		)
		expect(wrapper.find("div").exists()).toBe(true)
	})
})
