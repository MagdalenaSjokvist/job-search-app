- STRUCTURE:
  /jobs/
  JobListPage
  JobList
  JobListItem
  /jobs/:id (VG)
  JobDetailPage (VG)

- API INSTRUCTIONS - The API has the following structure:

  - To get a list of all jobs filtered on javascript:
    https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript
  - To get a specific job using its id:
    https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=35842a28-ff8847ba-99e5-f9960ae901a4

- TO DO

1. Add an input field where the user can enter something to search on
2. Add a button to trigger the search
3. The API expects "spaces" to be changed to "plus-signs"
   - If a user searchs for "react javascript", change the string to
     "react+javascript"
4. When the user searchs for a specific term (description), list the result
   returned from the API.

5. Make sure that the type value returned from the API is contained in a
   strong-element
6. Make sure that the title value returned from the API is contained in a h2-
   element
7. Make sure that the company_url value returned from the API is contained in
   a a-element
8. Make sure that the description value returned from the API is contained in
   a p-element or a div-element
9. Make sure that the company_logo value returned from the API is added to
   the src attribute for a img-element
10. If the API returns an empty array, make sure to show a message to the
    users with the following text: "No jobs found"

11. Write tests to make sure that all the components in your project are
    working as expected (at least 10 tests).
12. Create at least three components
    - JobList
    - JobItem
    - Image

- VG (all of the below should be developed to receive the higher grade):

13. When the user clicks on a job posting the user is redirected to the
    detail page for that job posting
14. Save the result from the API in context, check if the value the user is
    searching for is already in context, if so, return it from context instead
    for fetching it again
15. Deploy application to any hosting site (github pages, netlify, firebase,
    vercel etc)

- TIPS:
  To render HTML that is returned from the API, please use
  dangerouslySetInnerHTML (https://reactjs.org/docs/dom-elements.html)
  To make sure urls are handled correctly on the hosting service, use
  HashRouter if necessary.
