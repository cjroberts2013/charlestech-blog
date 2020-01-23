---
title: "Styling React Components | Post #5"
path: "/post-05"
date: "2020-01-22"
author: "Charles"
excerpt: ""
tags: ["react css"]
---

# Styling React Components
In todays blog, we will discuss a few different ways to style react components.

## Inline Styles
The most simple way to add styling to a react component is throught the us of inline styles. In React, inline styles are not specified as a string. Instead they are specified with an object whose key is the camelCased version of the style name, and whose value is the style's value

```javascript
function MyComponent() {
  return <div style={{color: 'red', fontSize: 52px}}>Hello World!</div>;
}
```

We can create variables that store the style properties and then pass it to the element as shown below.

```javascript
const style = {
    color: 'red', 
    fontSize: 52px
}
function MyComponent() {
  return <div style={style}>Hello World!</div>;
}
```
These will return the same effect. This is an ok method of styling components if you only have a few style properties.

The main downside to inline styles is that you can not use sudo selectors. 

## CSS Stylesheet
When you would like to reuse style properties as you would with regular html and css, you can import your css file to the component file. 

```javascript
import React from 'react';
import './MyComponent.css';

const MyComponent = () => (
  <div className="container">
    <h1 className="header">Welcome To My Blog</h1>
  </div>
);

export default MyComponent;
```
One thing to make note of is that because React uses JSX, within components you must use className. This is because class is a reserved word in react. 

## Dynamically Changing Styles/Classes
React has a way for you to dynamically change your classes, and therefore change your styles. By creating class based styles in your css file 
```css
MyComponent.css

.red {
    background-color: red;
}
.bold {
    font-weight: bold;
}
```
You can conditionally render it in your react component. This can be done first, creating a variable equal to an empty string 
```javascript
const classes = []
```
Once done, you can create conditional statements that if true, push the class name into the classes array we created above.
```javascript
const classes = []
if(conditional statement) {
    classes.push('red'); // classes = ['red']
}
if(second conditional statement) {
    classes.push('bold') // classes = ['bold']
}
```
If both statements were to return true, then the classes array would equal ['red', 'bold'].
To implement this into your component, you need to bind your className to classes.join(' '). With JSX, everything is javascript so this works. All together, this looks like this
```javascript
const classes = []
if(conditional statement) {
    classes.push('red'); // classes = ['red']
}
if(second conditional statement) {
    classes.push('bold') // classes = ['bold']
}
return(
const MyComponent = () => (
      <div>
        <h1 className={classes.join(' ')}>Welcome To My Blog</h1>
      </div>
    );
)
```
---
## Other Methods
On top of the methods of adding style to components that we have shown above, there are many third party packages that make it really easy to style components. We will not be diving into these in this post but some of the most popular ones are Styled-components and Css-modules.

Along with sharing my daily progress, I plan on sharing interesting and helpful articles that I find along the way. Thank you so much for checking out my post! If you have any questions, feel free to shoot me a message on twitter. I'd be glad to start up a conversation.

