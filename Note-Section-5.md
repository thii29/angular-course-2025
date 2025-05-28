## Section 5
### Show error message in terminal
[ERROR] NG2: Type '{id: string; name: string; avatar: string}' is not assignable to type 'string'. [plugin angular-compiler]
src/app/app.component.html:13:16 => error come from app-component, line 13, column 16
13| <app-task [**userId**]="selectedUser" [name]="selectedUser.name" /> => it even shows us the problematic line of code and higlights the part that's causing this error.

### Have error but it doesn't show message
Step 1: open dev tool -> watch 'sources' tab.
Step 2: find the file(s) may be have error and mark break point by clicking on it, executed by controll below.
Step 3: after find out error and fixed, remove break point by clicking on it again.

### Angular dev tools
- Angular DevTools (chrome extension)

