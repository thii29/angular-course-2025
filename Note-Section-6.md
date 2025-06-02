## Section 6: Components & Templates - Deep dive

- Separation of concerns: Every component should only do "one thing".
  \*Separation of concerns vs Simplicity & code colocation

### The Shadow DOM

- A browser feature that allows you to attach hidden DOM structures to DOM elements
  Ex: The bult-in <video> element hides a more complex DOM tree that's used internally
- For CSS styling, the Shadow DOM can be used to scope CSS styles to that hidden tree - instead of applying styles globally to the entire page.
- Angular can emulate this Shadow DOM browser feature for its own components.

### Component Host Elements

- Every Angular component has a Host Element
  Ex: A component with a selector of "app-header" targets and <app-header> element which is rerendered into the real DOM.
- Important: The elements targeted by your component selectors DO NOT ac as placeholders and ARE NOT replaced when the page is rerendered!
- Instead, the selected elements are preserved and simply "enhanced"/taken over by your component logic & markup!

### Class bindings: repetition

<div [class.status]="currentStatus === 'offline'"> // can add or remove class dynamic
[style]="{
    'font-size': '64px' // or fontSize : '64px'
}"
or [style.fontSize] = "'64px'"

### ngOnInit()
Complex task like sending HTTP requests, should not go into the constructor, but instead into ngOnInit()

## HTML Input Elements
Link: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement

It the template variable were assigned to some other element, the type would reflect that element (e.g: on a <textarea>, it would be HTMLTextAreaElement)

## Signal Effects cleanup functions
When working with Signal effects, you sometimes might need to perform some cleanup work before the effect function runs again (e.g., to clear some timer or something like that).

Angular's effect() allows you to do that!

It does provide you with an onCleanup hook which you can execute as part of your effect function to define what should happen before the effect code runs the next time:

effect((onCleanup) => {
  const tasks = getTasks();
  const timer = setTimeout(() => {
    console.log(`Current number of tasks: ${tasks().length}`);
  }, 1000);
  onCleanup(() => {
    clearTimeout(timer);
  });
});

## Updating with signal values
update method in signal likely set method, but different, it expects to get a function as an argument, and that function will be executed by Angular
