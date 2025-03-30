# Development
## Prerequisites
- Git
- npm
- node js

## Getting started
To first get started, fork this repository and clone it onto your computer.
If you are a collaborator, you don't have to fork this repository, and you can just simply clone it.

```bash
git clone https://github.com/<username>/rush-hour-web.git
```
remember to replace ``<username>`` with your own username.

---

Once you've cloned your repository, run
```bash
cd rush-hour-web
npm install
```
To start your development server, run

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Code
### Branching
The main branch of this project is ``main``
When creating a pull request, create a seperate branch for your feature, from the main branch
```bash
git checkout -b <branch> main
```
Name your branch accordingly to the contribution you will make e.g.
```
git checkout -b feature/<your feature> main

# or
git checkout -b fix/<your fix> main
```

### Commiting
```bash
git add files/which/changed
git commit -m "feat: add score system"
```
When committing, make sure to keep your commit messages in present tense e.g. ("add", not "added")

All commit messages must follow this format:

```
<type>: <short summary>

feat: add score system
fix: add error handling
style: replaced spaces with tabs
```
All types listed here:
- revert
- feat
- fix
- remove
- deprecate
- perf
- docs
- test
- bench
- build
- refactor
- style
- chore
- temp

## Updating
To update your forked repository to sync with the upstream project, follow these steps
If you haven't set upstream remote, run
```bash
git remote add upstream https://github.com/nate10j/rush-hour-web.git
```

```bash
git fetch upstream
git merge upstream/main
```

## Pull request
```bash
git push origin <your branch>
```
Then, you can submit your pull request on github

## If you are a collaborator, push your branch directly to the upstream:
```bash
git push upstream <your branch>
```

## Conclusion
Thank you for reading
Happy Coding!
