---
title: "Post # 2"
path: "/post-02"
date: "2020-01-19"
author: "Charles"
excerpt: ""
tags: ["react"]
---

# React Components

So one of my main coding goals for this year is to master React. It is one of the skills that I would like to be employeed to work with. So today, along with the past few days I have been reading and working with react. One of the things I find myself struggling with is remembering the differences between functional stateless components and class components. I know it is in the name but I just keep getting these confused and not remembering how to write them separately. Because of this, I decided to spend a little time breaking them down better so that I can really wrap my head around them moving forward and stop with all this confusion. So below I am going to briefly break down the differences so that I have a personal reference that I can check back on.

## Functional Stateless Components

Below you can see the simple syntax to create a functional, stateless component.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

This is done by writing a simple Javascript function. It is the simplest way to define a component.

This is considered a functional component because it accepts props as an argument and returns a react element. It is also called stateless because you cannot us setState in these types of components. The benefit of this is that these components are easier to read and they require less code. The react team also mentioned that there may be extra performance boost when using them. It is recommended to use these type of components whenever possible.

## Class Components

React component can also be created using ES6 class syntax. This is called a class component.

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

The Class Component requires you to extend React.Component as you can see above. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions. Class components also require a render function which returns a react element. the benefit to using class components is the use of state and it allows more control through the use of lifecycle hooks.

---

## Moving forward

I hope to continue doing these small deep dives to increase my knowledge and understanding more. I know it may be a little silly for me to struggle with this in the first place but it is what it is. Now I will fill more confident with working with both functional and class components.

Along with sharing my daily progress, I plan on sharing interesting and helpful articles that I find along the way. Thank you so much for checking out my post! If you have any questions, feel free to shoot me a message on twitter. I'd be glad to start up a conversation.
