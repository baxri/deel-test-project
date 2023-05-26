# What is the difference between Component and PureComponent? Give an example where it might break my app.

The main difference between them lies in how they handle component updates and re-renders.
PureComponent is a subclass of Component with an additional optimization, It performs a shallow comparison of the component's props and state to determine if a re-render is necessary. In case of regular component, even it receives the same props or has the same internal state, it will still trigger a re-render.

# Context + ShouldComponentUpdate might be dangerous. Why is that?

I do not know why we are talking about ShouldComponentUpdate method, it is an old scholl already but
the potential danger arises because the shouldComponentUpdate method relies on shallow comparisons of props and state to determine if a re-render is necessary, it may not accurately detect changes in the context values. We have now React.memo memorizations thats works better in our case.

# Describe 3 ways to pass information from a component to its PARENT.

1. Callback Functions:
2. React context API
3. React useState hook

# Give 2 ways to prevent components from re-rendering.

1. Use the React.memo Higher-Order Component (HOC)
2. shouldComponentUpdate

# What is a fragment and why do we need it?

In React, a fragment is a component that allows you to group multiple elements together without adding an extra DOM node. It looks like empty tags

```
<></>
```

or with a key attribute

```
<React.Fragment></React.Fragment>
```

Fragments are useful in scenarios where you need to return multiple elements from a component, such as when you want to render a list of items. Instead of wrapping those elements in a parent container like a <div>, you can use a fragment to avoid introducing unnecessary markup to the rendered output.

# Give 3 examples of the HOC pattern.

1. Authentication Higher-Order Component:
   It wraps a component and provides props and methods related to authentication, such as checking if a user is authenticated, handling login/logout functionality, and managing access control.

2. Logging Higher-Order Component:
   The logging HOC is used to add logging functionality to components. It wraps a component and provides additional logging capabilities, such as logging lifecycle events, capturing and reporting errors, or tracking user interactions.

3. Theming Higher-Order Component:
   The theming HOC enables the dynamic application of themes to components. It wraps a component and provides theme-related props, allowing the component to change its appearance based on the currently active theme.

# What's the difference in handling exceptions in promises, callbacks and async...await?

The main difference in handling exceptions between promises, callbacks, and async/await is in the syntax and control flow.

Promises:

Exceptions are handled using the catch method. If an error occurs within a promise chain, the error will propagate to the next catch block in the chain.

Exceptions are typically handled using the err parameter as the first argument in the callback function.
Error handling in callbacks often involves checking for errors in the callback function and taking appropriate action.

Exceptions are handled using traditional try/catch blocks.
When an await expression throws an exception, the control flow jumps to the nearest catch block.

# How many arguments does setState take and why is it async.

The setState method takes two arguments: an object that represents the updated state values, and an optional callback function that will be executed after the state has been updated.

setState is asynchronous is to optimize the performance of React. When you call setState, React batches multiple state updates together and performs them in a single batched update. This helps to avoid unnecessary re-renders and improves the overall performance of your application.

# List the steps needed to migrate a Class to Function Component.

Rewrite the component structure
Transfer state variables
Convert lifecycle methods
Convert class methods
Refactor render method
Remove this references

# List a few ways styles can be used with components.

Inline Styles, CSS Classes, CSS Modules, styled-components, tailwind etc...

# How to render an HTML string coming from the server.

To render an HTML string in React, you can use the dangerouslySetInnerHTML prop.
