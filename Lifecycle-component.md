## Key Lifecycle Hooks Explained
### Constructor
Standard JavaScript/TypeScript class constructor (not Angular-specific)
Should only be used for basic class initialization
Input properties are not yet available here
Avoid complex initialization work

### ngOnChanges
Executes whenever input properties change
Receives a changes object with details about what changed
Contains current value, previous value, and whether it's the first change
Useful for updating component internal state based on input changes

### ngOnInit
Primary hook for component initialization
Input properties are available here
Best place for complex setup work (HTTP requests, etc.)
Executes only once during component lifecycle

### ngDoCheck
Related to Angular's change detection mechanism
Invoked whenever Angular thinks UI updates might be needed
Runs frequently across the entire application
Generally discouraged unless absolutely necessary

### Content Hooks (ngAfterContentInit/ngAfterContentChecked)
Deal with projected content (content inserted via ng-content)
ngAfterContentInit: Executes once projected content is initialized
ngAfterContentChecked: Executes when projected content is checked by change detection
Rarely used in most applications

### View Hooks (ngAfterViewInit/ngAfterViewChecked)
Deal with the component's template/view
ngAfterViewInit: Executes once the component's view is fully rendered
ngAfterViewChecked: Executes when view is checked by change detection
More commonly used than content hooks

### ngOnDestroy
Executes right before component is destroyed
Perfect for cleanup work (unsubscribing, clearing timers, etc.)
Triggered when component is removed from DOM

## Execution Order
Constructor (basic initialization)
ngOnChanges (when inputs change)
ngOnInit (main initialization - once only)
ngDoCheck (change detection checks)
ngAfterContentInit (content initialization - once only)
ngAfterContentChecked (content change detection)
ngAfterViewInit (view initialization - once only)
ngAfterViewChecked (view change detection)
ngOnDestroy (cleanup before destruction)
