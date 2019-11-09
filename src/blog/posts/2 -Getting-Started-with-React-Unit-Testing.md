## Getting-Started-with-React-Unit-Testing

A simple React Component:

```javascript

import React, { Component } from 'react'
class SampleComponent extends Component { 
  render(){ 
    return (
      <div>{this.props.title}</div>
    )
  }
}

export default SampleComponent

```

Above simple Components just renders a Label when Passed as title Props. Sample usage : 

```javascript
  <SampleComponent title={"This is a Title Passed as Prop"} /> 
```

We will use Enzyme to shallow Render the React Component.

### What is Enzyme ?

In General We will mutate the DOM(Manipulate the Elements on the UI ) by directly accessing the elements by Id or by Class Name,


In order to Test this Basic HTML component we will get the element by Id and apply key stroke methods on the Element(in case of Input) but in react we do not manipulate the DOM directly but instead React takes care of manipulating the DOM by running a series of algorithems to mazimize the effieciency.

All that Apart, We are here to Rest our React Component and We should able to Control each and every part of it. But when When Rendered on DOM React becomes pure HTML, which yields back to above case of testing direct Dom Elements and we can have to abilitu to the React Component(there is no longer a State or component Life Cycles here) But instead we need to test the React Components even before they are written to DOM(Kind of), So Enzyme helps to take a Copy of the React Component and Play on it.
All the React Component API's like setState(),this.props, and all life cycle methods are avaialble on the Copy. Enzyme have Rich API's that help us to play with each and every part of React Component and Check How it Behaves("Unit Testing: How Unit Behaves")


So We Inject Our React Components in to Enzyme and Make a copy of it to test the behaviour
Well There are three types of copies we can make :
Shallow Copy : This Copy does not Effect the Child Components but does make a count of them
In the Above Example if we make a copy of Parent Using Enzyme Shallow Render


```javascript

const Wrapper = shallow(<Parent />) // Usually Named as Wrapper as this is just wrapper of actual DOM Technically it can be named anything

```

(This is How to make a Copy !. isn't Simple ! )

Shallow Render does not render the child Component and does not worry about the behaviour of them in any manner(Like did child receive Props, was any props missing)
As it does not even render it does even know what a child component would look like(A child's Privay is more Important than Parent's;) ) But it does know is children are Present if so how many. Read more [here](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md):

### Full Rendering:
The disadvantage with Shallow Render is that the React component Cycle Cycles cannot be used, in use cases where we need to test the behaviour of the component using life cycle methods
For Example:
Is the State set when componentDidMount Happen
Does component Render if Component receives new Props(`ComponentWillReceiveProps`)

To take advantage of all life cycle methods we can use
const wrapper = mount(<Foo />)
This makes full copy of the React Component including access to Life Cycle methods.
Static Rendering: This is far most the less effecting and not widly used copy. Static Rendering basically takes the react component and covert to plain HTML, this gives us the ability to Look for elements by id's and classnames.
expect(wrapper.find('.foo-bar')).to.have.length(3)
