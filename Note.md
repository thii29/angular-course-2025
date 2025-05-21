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
