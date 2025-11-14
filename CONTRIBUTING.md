## CONTRIBUTING to NACOSS-BrainBox

Welcome to the NACOSS-BrainBox Open-Source Challenge! We are thrilled to have you contribute to the brain-box web application.

This guide will help you understand the project workflow, coding standards, and the rules of the <b>Golden Pull Request Award Competition</b>.

## The Golden Pull Request Award: Competition Rules
The primary goal is to build our trivia application. Your contributions are rewarded!

1. Metric: The competition is based on the total number of valid Pull Requests (PRs) merged into the main branch during the competition period (November 15 – November 30, 2025).

2. Eligibility: Only currently enrolled Computer Science students of the University of Ilorin are eligible for the prize. Irrespective of your level (100-400), you are welcome to participate.

3. Validity:

* PRs must directly address an existing, assigned Issue in the repository.
* PRs must be functional, adhere to the coding standards, and pass code review.
* Trivial or spam PRs (e.g., changing one typo) may be excluded from the count at the discretion of the Software Director.

4. Timeline: The competition officially runs for November, 2025, to November 30, 2025, at 11:59 PM (WAT). All PRs must be merged before the deadline to count.

5. The Prize: The contributor with the highest merged PR count will receive the Grand Prize, announced at the end of the competition.

## Getting Started: Contribution Workflow
_Follow these steps to ensure your contribution is valid and merged quickly:_

1. Set Up the Project
* Fork the Repository: Click the "Fork" button at the top right of the GitHub page.
* Clone Your Fork: Clone your forked copy to your local machine:
```sh
    git clone https://github.com/nacossuil/brain-box.git
```
* Install Dependencies: Navigate to the project directory and install the required packages:
```sh
    cd brain-box
    npm install
```
* Run Locally: Start the development server:
```sh
    npm start
```

2. Claim an issue

* Check the Issues Tab: Review the list of open tasks. We have tagged issues as good first issue for beginners.
* Claim the Task: Crucially, comment on the Issue with <b>"I'll take this"</b> to let others know you are working on it. This prevents duplicate work.

3. Code Your Solution
Create a New Branch: Always create a new branch for your specific task. Use a clear, descriptive name (e.g., feature/issue-4-api-fetch or fix/typo-in-readme):
```sh
    git checkout -b your-branch-name
```
* Make Your Changes: Write your code to address the Issue.
* Commit Your Changes: Write a clear commit message that references the Issue number:

```sh
    git commit -m "feat: Implemented API fetching logic as per #1"
```

4. Submit Your Pull Request (PR)

* Push to Your Fork:
```sh
    git push origin your-branch-name
```
* Create the PR: Go to your forked repository on GitHub and click the "Compare & Pull Request" button.
* Write a Clear Description: In the PR body, briefly explain what you did and confirm you tested it locally. Reference the Issue number (e.g., Closes #1).

5. Coding Standards

* Language: Use modern JavaScript (ES6+).
* Components: Prefer Functional Components over Class Components.
* Styling: Keep styling simple for now (standard CSS or inline styles where necessary).
* Readability: Write clean, well-commented code.

We look forward to reviewing your contributions and seeing who wins the <b>Golden Pull Request Award! :)</b>.

<b>Dynasty (Emmanuel Mojiboye), NACOSS Software Director,</b> <br>
Nova Administration, University of Ilorin.