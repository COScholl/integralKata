# Social Networking Kata

I began this kata around 11am Friday, October 23 and made my last commit to
Github around 1pm.

TLDR;

- Package:
  - `jest-cucumber` for the BDD testing.
  - `lodash` for data structure manipulation
  - `luxon` for Date and Time

- I created a `__features__` directory and created three features.
- I set up the BDD style test structure in the kata.test.js
- I started creating initial functions and unit tested the necessary functions
- I tested the features once the unit tests for the first feature were passing
- I started working on the second feature by refactoring the first feature
- I documented my intentions and stubbed out functions
- Time wound down

My approach was to set up tests that reflected the Gherkin syntax-style scenarios
and features in the README.md at https://github.com/integral-io/katas/tree/master/social-networking
first after copying over the files from the `katas/starter/js/` into my local
git repository. I then went about creating functions in the functional paradigm
to create a new user, and to post messages to the user's timeline property. I considered
using an OOP paradigm, but envisioned this project going into a React application,
and since I prefer using hooks with React, I wanted to emulate the use of anonymous
functions to clone objects and return a new object to update state.

After I set up the BDD tests, I then started using TDD for the functions I was
creating in the `kata.test.js` file. I was not testing for edge cases, but focused
on getting the output that I was looking for, and when the unit tests for the functions
I had written for the first feature passed, I updated the feature tests and moved
on to the second feature.

Since I needed timestamp data, I changed the user.timeline data structure to reflect
the need for a timestamp, and this meant that I had to rewrite my unit tests to
reflect that change. At this point, time was winding down, so I made sure to document
my intentions and my functions to make it easy to pick up where I had left off,
given the chance.
