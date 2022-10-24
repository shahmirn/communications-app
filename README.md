# Communications App - Express API - Showcase Project

User Stories:

1. As a user, I want to see all Conversation Messages in descending order by date.
2. As a user, I want to see the type of the Conversation Message for each record. "SMS" or "Phone Call."
3. As a user, I want to see only the Conversation Messages from a specific phone number

Derived Requirements:

- Create an app that displays displays the conversation messages.
    - Sort by Date descending, by default
    - Format the date so that it's human-readable
    - Display Date, To, From, and Type
    - Allow filtering by From

## Version
0.0.1

## Tech
* [React] - A JavaScript library for building user interfaces
* [Redux] - A predictable state container for JavaScript apps.
* [React-Redux] - Official React bindings for Redux
* [Redux Toolkit] - The official, opinionated, batteries-included toolset for efficient Redux development
* [MUI] - Material UI is a library of React UI components that implements Google's Material Design.
* [Luxon] - A powerful, modern, and friendly wrapper for JavaScript dates and times.
* [Typescript] - An open-source language which builds on JavaScript.

## Running locally
- Follow instructions at https://github.com/shahmirn/communications-api to set up the backend
- git clone https://github.com/shahmirn/communications-app
- cd communications-app
- npm install
- npm run start
- Go to http://localhost:3000/

## Todo's
- Add unit tests
- Support additional sorting and filtering
- Display the actual SMS in a nice, formatted manner

[React]:https://reactjs.org/
[Redux]:https://redux.js.org/
[React-Redux]:https://react-redux.js.org/
[Redux Toolkit]:https://redux-toolkit.js.org/
[MUI]:https://mui.com/
[Typescript]:https://www.typescriptlang.org/
[Luxon]:https://moment.github.io/luxon
