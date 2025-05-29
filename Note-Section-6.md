## Section 6: Components & Templates - Deep dive
- Separation of concerns: Every component should only do "one thing".
*Separation of concerns vs Simplicity  & code colocation
### The Shadow DOM 
- A browser feature that allows you to attach hidden DOM structures to DOM elements
Ex: The bult-in <video> element hides a more complex DOM tree that's used internally
- For CSS styling, the Shadow DOM can be used to scope CSS styles to that hidden tree - instead of applying styles globally to the entire page.
- Angular can emulate this Shadow DOM browser feature for its own components.
