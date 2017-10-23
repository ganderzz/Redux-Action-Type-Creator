# Redux Action Type Creator
Create unique, easy to use Action Types

## Install

`npm i --save redux-action-type-creator`
`yarn add redux-action-type-creator`

## Example

```
import createActionType from "redux-action-type-creator";

/**
 * Creates a json object with the key-value pair:
 * {
 *    FETCH_USER: "FETCH_USER/0",
 *    CLEAR_USERS: "CLEAR_USERS/1"
 * }
 *
 * Every action passed to createActionType will be appended an auto-incrementing ID.
 * As shown in the object above, adding another action type would have `{name}/2`, and so on.
 */
const ACTIONS = createActionType(
    "FETCH_USER",
    "CLEAR_USERS"
);

const fetchUser = () => ({
    type: ACTIONS.FETCH_USER
});
```