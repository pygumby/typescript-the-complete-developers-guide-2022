# TypeScript: The Complete Developer's Guide (2022 Edition)

Notes by Lucas Konstantin Bärenfänger (@lkbaerenfaenger)

## More on Types (Section 02, Lecture 13)

- Types:
  - Primitive Types
    - `number`
    - `string`
    - `boolean`
    - `symbol`
    - `void`
    - `null`
    - `undefined`
  - Object Types
    - `functions`
    - `classes`
    - `arrays`
    - `objects`

## Understanding Inference (Section 03, Lecture 20)

- When to explicitly use type annotations:
  - When we declare a variable on one line, then initialize it later
  - When we want a variable to have a type that can't be inferred
  - When a function returns the `any` type and we need to clarify the value

## More on Annotations Around Functions (Section 04, Lecture 25)

- Type inference for functions:
  - TypeScript tries to figure out what type of value a function will return...
  - ...but it will not try to figure out what type of value the arguments are.
