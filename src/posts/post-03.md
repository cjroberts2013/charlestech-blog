---
title: "React State! | Post #3"
path: "/post-03"
date: "2020-01-20"
author: "Charles"
excerpt: "Today I break down React State"
tags: ["react state"]
---

# React State

The objective in today's post is to go over React state to help myself get a better understanding of the concept and how to use it.

## What is State

State is one of the most powerful features of components in React. It allows you to track data in your app and render a UI in response to changes in this data. If your data changes, your component re-renders.

To begin, lets look at a simple example of how to use state in a component.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Charles",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
```

State is assigned its initial value in the class constructor. Once assigned, you can display any part of it in the UI that is rendered. You can access the data with this.state.protpertyname.

There is another way to access state in a component. In the render() method, before the return statement, you can write JavaScript directly. For example, you could declare functions, access data from state or props, etc. Then, you can assign any data to variables, which you have access to in the return statement.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Charles",
    };
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}
```

This example shows assigning this.state.name to a constant in the render function, and accessing this constant in the rendered UI.

State is changed using setState, which is the API method provided with the library so that the user is able to define and manipulate state over time. SetState is a topic we will return to in a different post.

Along with sharing my daily progress, I plan on sharing interesting and helpful articles that I find along the way. Thank you so much for checking out my post! If you have any questions, feel free to shoot me a message on twitter. I'd be glad to start up a conversation.
