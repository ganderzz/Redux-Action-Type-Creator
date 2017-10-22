# Redux Action Type Creator
Create unique, easy to use Action Types

## Install

`npm i --save redux-action-type-creator`
`yarn add redux-action-type-creator`

## Example

```
import createActionType from "redux-action-type-creator";

const ACTIONS = createActionType(
    "FETCH_USER",
    "CLEAR_USERS"
);

const fetchUser = () => ({
    type: ACTIONS.FETCH_USER
});
```