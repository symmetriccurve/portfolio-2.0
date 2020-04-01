## How React handles Corrupted VDOM or Does it ?. 

First let’s talk about what the ways when the VDOM will be corrupted, I can think of two ways one of which is not actually a corruption but an inconsistency with Real DOM. 

### First way of VDOM corruption 

When React renders a list of elements from an array using index of the item as a Key, and array operations are performed which yield removal or re arrangement of items inside an array. The new indexes does not map with old indexes and result in React not to render new list items or produce events on wrong items(liking clicking on 5th item may produce click event on 6th item, which was previously 5th index before rearrangement). we avoid this by using unique keys which persist across multiple renders. (This is the same reason, Math.Random() or UUID is a bad key).


### Second way of VDOM corruption

It is a well know fact the jQuery, Angular, Ember like libraries and Frameworks directly manipulate the DOM unlike React. Per se, if a JQuery is used along side with React(which is very bad)

As the Documentation says

```This does not mean it is impossible or even necessarily difficult to combine React with other ways of affecting the DOM, you just have to be mindful of what each is doing. ```
[Official React website ](https://reactjs.org/docs/integrating-with-other-libraries.html)

The mindfulness had to deal with lot of challenges(UI inconsistencies with Data) that React is capable of handling by it’s internal [Reconciliation](https://reactjs.org/docs/reconciliation.html) algorithms. The way `Virtual DOM`works is that it takes a copy of the `REAL DOM` whenever it applies a change and tries to be in sync with the REAL DOM so it can work on its `VDOM` and then apply changes to the `REAL DOM`. 

Let’s imaging a scenario when `VDOM`  made a copy of `REAL DOM` and some other library made DOM mutations and `VDOM` is not aware of this change.  Okay, I know this is confusing let’s take a simple Example. 

``` html
<div> 
  <span> Foo </span>
  <span> Bar </span>
<div>
```
Now, think in the VDOM the structure of Real DOM is this, now JQuery comes in to picture and updates the DOM to 
([Jquery is imperative while react is declarative]([https://flaviocopes.com/react-declarative/](https://flaviocopes.com/react-declarative/)))

```html
<div> 
  <span> Foo </span>
<div>
```

which deletes the bar `<span>`, now react performs(in a [declarative way]([https://flaviocopes.com/react-declarative/](https://flaviocopes.com/react-declarative/))) a change that need to update the Bar `<span>` to baz something like this

```html
<div> 
  <span> Foo </span>
  <span> Baz </span>
<div>
```

as `VDOM` could not find the Bar `<span>`, it simply drops the update(does not do any change) and the throws a warning conditionally

``Uncaught Error: Invariant Violation: processUpdates(). This probably means the DOM was unexpectedly mutated.`` 

I remember this warning when I first started web development with react and I was not aware how to nest the HTML tags. 


Further Reading: 
- https://stackoverflow.com/questions/31528177/invariant-violation-processupdates-unable-to-find-child-0-of--element#comment51022125_31528440
- https://github.com/facebook/react/issues/3762
- [https://github.com/tleunen/react-mdl/issues/280](https://github.com/tleunen/react-mdl/issues/280)
