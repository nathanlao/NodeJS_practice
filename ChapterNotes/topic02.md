# Frontend Review

## HTML/CSS
1. HTML documents are composed of `textual content` and `HTML
elements`
    - `HTML elements` has:
        - tag
        - attributes (communicate with JS and backend)
        - content

2. CSS document consists of one or more `style rules`
    - `selector` that identifies the HTML element
    - `property:value` pairs (each pair is `declaration`)

#### TypeScript
- A strongly typed version of JavaScript (extra layer for error checking)
- Provide an `optional type system` for JavaScript:
    - Implicit and Explicit types
    - Structural types
    - Prototype-based object chaining

## Angular
- works on `components`
- A component in Angular contains `a portion of HTML code` and provides `functionality` to that portion
- First loads a `root` component 
    - then looks inside the root component to see if any `nested` components

- **Sample Process**:
    - To build an Angular component, we need to use the component decorator on a class:

            import { Component } from '@angular/core';
        
    - To decorate / define a component, you need to provide at least two
    properties: 

            @Component({
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            })

    - In `index.html`:

            <body>
                <app-root></app-root>
            </body>

    - To create a subcomponent (folders includes html, css, testing): 
    
            $ ng generate component <subcomp_name>