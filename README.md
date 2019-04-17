## Instructions

You have been tasked with creating an Object-Oriented system to keep track of
the happenings at a certain educational institution not unlike Launch Academy. A few engineers have already provided tests for the features needed for the system. However, they need your help satisfying these tests so that they can track students and their students system check submissions for each of their cohorts. Based on a product planning session, you have determined these are the javascript classes you will need:

* `Character`
* `Song`
* `Soundtrack`
* `Movie`

### Getting Set Up

Run the following commands from your terminal:

```
$ git clone https://github.com/LaunchAcademy/clinic-js-oop-disney.git
$ cd clinic-js-oop-disney
$ yarn install
$ yarn test
```

Note: we recommend running one test at a time:

```
  yarn test src/Character.test.js
```

Let the tests guide your development.

## Meeting Expectations Requirements

Make the following tests pass by adding code to the `src` folder:

1. `src/Character.test.js`
2. `src/lib/Song.test.js`
3. `src/lib/Soundtrack.test.js`
4. `src/lib/Movie.test.js`

We also recommend satisfying each test suite in this order.

### Tips

* Take a moment to familiarize yourself with the codebase. Look at each provided file, especially your test files, to get an idea of what is expected of you.
* Jest will tell you what is breaking. Use the following workflow:
  - Run the test suite.
  - Read the error message.
  - If you're confused by the error check the actual test file to see how it's set up.
  - Do the simplest implementation, without "hard coding" values, that corrects the error.
  - Repeat.
* Once the test suite is passing, disregarding tests that start with `exceedsExpectations`, please submit your code by running `et submit`.
* **DO NOT** start the requirements for exceeding expectations before you have completed the requirements necessary for meeting expectations.

## Extra Credit
