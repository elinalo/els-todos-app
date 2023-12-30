# ElsTodos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

Purpose of this app is to practice angular and ngrx. at the same time the end result should help me to structure my todos and later it should be increased by an priority matrix.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Commit-convention
using gist git convention [https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13]

```
<type>(<optional scope>): <description>
empty separator line
<optional body>
empty separator line
<optional footer>
```

* breakting changes indicator: should be indicated by an `!` before the `:` in the subject line e.g. `feat(api)!: remove status endpoint`
  * is optional
* description: contains a concise description of the change
  * is mandatory
  * use the imperative, present tense: "change" not "changed" nor "changes"
    * Think of `This commit will...` or `This commit should...`
  * don't capitalize the first letter
  * No dot (.) at the end
  
### usage - need to be done
to use gist in the project, add it with `npm install --global git-conventional-commits` and create a config file: `git-conventional-commits init` and adjust the config `git-conventional-commits.yaml` to your needs

### commit types

`feat` Commits, that adds or remove a new feature

```
feat: add email notifications on new direct messages
feat(shopping cart): add the amazing button
feat!: remove ticket list endpoint

refers to JIRA-1337

BREAKING CHANGES: ticket enpoints no longer supports list all entites.
```

`fix` Commits, that fixes a bug

```
fix(api): handle empty message in request body
fix(api): fix wrong calculation of request body checksum
fix: add missing parameter to service call

The error occurred because of <reasons>.
```

`refactor` Commits, that rewrite/restructure your code, however does not change any API behaviour

`refactor: implement fibonacci number calculation as recursion`

`style` Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)

`style: remove empty line`

`test` Commits, that add missing tests or correcting existing tests

`docs` Commits, that affect documentation only

`build` Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...

```
build: update dependencies
build(release): `bump version to 1.0.0
```

`ops` Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...

`chore` Miscellaneous commits e.g. modifying .gitignore

`chore: remove unused attributes and methods`


## plugins used in project - need to be done
* angularr language server
* angular schematics
* prettier - code formatter
* eslint
* prettier eslint
* code highlight
* code spell checker
* angular2-switcher
 * usage on macOS: \
   Switch to HTML	   | Shift+Alt+O \
   Switch to CSS		   | Shift+Alt+I \
   Switch to ts	     | Shift+Alt+U \
   Switch to spec.ts	| Shift+Alt+ \
