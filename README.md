## Instructions

You have been tasked with creating an Object-Oriented app to keep track of all of our favorite Disney movies! However, we need your help satisfying these tests so that we can track characters and their soundtracks to the correct movie. Based on a product planning session, you have determined these are the javascript classes you will need:

- `Character`
- `Song`
- `Soundtrack`
- `Movie`

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
  yarn run test src/__tests__/01_Character.test.js
```

Let the tests guide your development.

## Meeting Expectations Requirements

Make the following tests pass by adding your code and classes to the `src` folder:

1. `src/__tests__/01_Character.test.js`
2. `src/__tests__/02_Song.test.js`
3. `src/__tests__/03_Soundtrack.test.js`
4. `src/__tests__/04_Movie.test.js`

We also recommend satisfying each test suite in this order.

### Tips

- Take a moment to familiarize yourself with the codebase. Look at each provided file, especially your test files, to get an idea of what is expected of you.
- Jest will tell you what is breaking. Use the following workflow:
  - Run the test suite.
  - Read the error message.
  - If you're confused by the error, check the actual test file to see how it's set up.
  - Do the simplest implementation, without "hard coding" values, that corrects the error.
  - Repeat.
