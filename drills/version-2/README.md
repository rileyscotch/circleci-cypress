# E2E Testing

## Overview

For this assessment:

1. Write a test to _visit_ the url `https://gschool-e2e.github.io/`
1. Wait for the `<header>` element.
1. Ensure title equals 'E2E Intro'
1. _'Click'_ on the 'Search' navbar link/button.
1. Verify the URL is correct.
1. Fill in the text box with your github username.
1. Wait for your avatar image to load before concluding the test.

## Setup

```sh
# git clone this repo
git clone ...
cd drills/version-2
npm install

# setup - open the browser gui
./node_modules/.bin/cypress open

# vimmers:
vim tests_spec.js
# or vs coders:
code tests_spec.js
# or atom ppl:
atom tests_spec.js
```

> Resources:
> * [API](https://docs.cypress.io/api/introduction/api.html)
> * [Tutorials](https://docs.cypress.io/examples/examples/tutorials.html)
> * [Recipes](https://docs.cypress.io/examples/examples/recipes.html)
