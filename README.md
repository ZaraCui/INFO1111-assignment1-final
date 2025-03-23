# Strata Management Portal

A sample Next.js project with TailwindCSS for strata management.


# INFO1111 Assignment 1 

## Vercel Configuration (`vercel.json`)
This project uses a customized `vercel.json` file to demonstrate advanced deployment configurations on Vercel:

- **Builds:** Defines the build process using Next.js.
- **Routes:** Custom API routing (`/api/submit-issue`, `/api/form-data`, etc.).
- **Redirects:** Handles POST request redirection to a success page.
- **Cron Jobs:** Automates weekly report generation using scheduled serverless functions.
- **Deployment Region:** Deploys the site to the `syd1` (Sydney) region to suit the Strata scenario.

## Serverless API Functions
The following serverless functions are implemented to simulate real-world use cases in strata building management:

- `submit-issue.js`: Accepts POST form submissions and redirects to a confirmation page.
- `form-data.js`: Returns example data using a GET request.
- `weekly-report.js`: Generates a weekly summary report for the committee (used in cron jobs).

## Frontend Features
The site includes multiple HTML, CSS, and JavaScript demonstrations to fulfill STRONG rating requirements:

- A **maintenance request form** built using HTML and POST submission.
- Multiple functional pages (e.g., Dashboard, Finance, Meetings, Residents).
- Redirect and HTTP response handling demonstration.
- Explanation of HTTP methods (GET vs POST) and status codes.

## Additional Notes
- This project demonstrates full integration between frontend and backend features using Vercel serverless capabilities.
- It highlights deployment automation, user interaction via forms, and data exchange through API routes.
