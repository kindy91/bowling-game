# BowlingGame

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Potential for imporvement
1. Include unit tests for all the project to cover the different edge cases. The tests should include all the pure functions, models, services, signals logic and template rendering tests. And it should cover all the branches as much as possible.
2. There are places where the logic can be tricky to understand, especially in the edge case areas. While some complicated code in such a repo is unavoidable, but there is always room for improvement.
3. Include linting and prettier configuration to make sure a strictly typed repo.
4. Enhance the visuals, where the cards sometimes flicker, especially if it is the last frame and it has 3 rolls.
5. Enhance user experience, by making it easier to do the whole process by keyboard navigation. Currently the input field is outfocued on submit.
6. Explore responsiveness and how it should look like on different screen sizes.