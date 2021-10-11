# 275 Final Project Starter Repo
Hello! This repository has been pre-configured with eslint and gh-pages to automatically deploy your app when you push to the main branch. 

You will, however, need to finish setting up the deployment.

## Setting Up the Deployment

### 1. Generate a personal access token
After forking, click on your picture -> settings in the top right of Github. Then, scroll to "Developer Settings" and click "Personal access tokens." Generate a new token with "repo" access and no expiration date. Make sure you copy the created token as you will not be able to see it after this.

### 2. Add a secret to the forked repo
In the forked repo, go to settings -> secrets and click "New repository secret." Name the secret "GH_TOKEN" and paste in the value you copied in the previous step. 

### 3. Change the workflow file and package.json

Open the [.github/workflows/node.js.yml](.github/workflows/node.js.yml) file, and edit lines 36 and 37 to have your name and email: 
```
git config --global user.name YOURNAME
git config --global user.email YOUREMAIL@udel.edu
```

Then, change the `homepage` field in the `package.json` file to be `https://ud-cisc275-f21.github.io/YOUR-TEAMS-REPOSITORY-NAME/`, replacing the capitalized letters with the actual name of your repository:
```json
{
  "name": "final-project-starter",
  "homepage": "https://ud-cisc275-f21.github.io/YOUR-TEAMS-REPOSITORY-NAME/",
  "version": "0.1.0",
```

### 4. Test your deployment

Make a change in `src/App.tsx`. Commit and push the change to the main branch and see if your deployment was successful. 

All your teammates will additionally need to make feature branches to add your names to the site, merging them as Pull Requests to main.
