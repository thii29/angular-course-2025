## Section 2
### How to use signal

selectedUser = signal(DUMMY_USERS[randomIndex]);
imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

//because of using signal so we don't need function below
get imagePath(){
return 'assets/users/' + this.selectedUser.avatar
}

onSelectUser() {
const randomIndex = Math.floor(Math.random() \* DUMMY_USERS.length);
this.selectedUser.set(DUMMY_USERS[randomIndex]);
}

---
in HTML file
<img
[src]="imagePath()"
[alt]="selectedUser().name"
/>
---

### 210525
input without uppercase is a generic function, it can receive type, can require: input.require(), when .require we can't add default value

//input()
avatar = input.required<string>();
name = input.required<string>();
//output()
select = output<string>();

### type & interface
https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220
### ngIf ngFor
<ul id="users">
  <li *ngFor="let user of users">
    <app-user [user]="user" (select)="onSelectUser($event)" />
  </li>
</ul>

<app-tasks *ngIf="selectedUser ; else fallback"  [name]="selectedUser!.name" />
<ng-template #fallback>
  <p id="fallback">Select a user to see their tasks!</p>
</ng-template>

### 220525
NgModel Directive:
- An "element enhancement" that helps with extracting (or changing) user input values
- Directives, unlike components, don't have a template!
signal & two-way binding
  -enteredTitle = signal('');
  -enteredSummary = signal('');
  -enteredDate = signal('');
 
### Summary section 2
Core Concepts Covered

Components - The building blocks of Angular applications that create custom HTML elements through classes decorated with @Component. Components form a tree structure and communicate via Inputs (properties set from parent components) and Outputs (custom events for child-to-parent communication).

Template Binding - Various syntaxes for dynamic data display including string interpolation, property binding, event binding, and two-way binding (particularly with ngModel for forms).

Change Detection - Angular automatically watches for events that could trigger UI updates using zone.js, though developers can alternatively use Signals (available since Angular 16) for more explicit and potentially more efficient state management.

Conditional Rendering & Lists - Modern syntax includes @if for conditional content and @for for repeating elements (both available since Angular 17), replacing the older ngIf and ngFor directives.

Additional Features - Dynamic CSS class binding, content projection with ng-content, pipes for value transformation, and form handling with the ngSubmit event.

Services & Dependency Injection - A crucial pattern for sharing data and logic across components by creating injectable services decorated with @Injectable and injecting them via constructor parameters or the inject() function.
