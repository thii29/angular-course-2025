## Note
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
input without uppercase is a generic function
it can receive type, can require: input.require()
when .require we can't add default value

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
