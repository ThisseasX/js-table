# js-table

Takes an array of objects like this:

```js
[
  {
    type: 'dog',
    breed: 'super-dog',
    age: 1,
    ears: 2,
  },
  {
    type: 'cat',
    breed: 'awesome-cat',
    age: 3,
    whiskers: 3,
  },
  {
    type: 'bird',
    breed: 'cool-bird',
    age: 2,
  },
];
```

And produces a table like this:

```
----------------------------------------------
| type | breed       | age | ears | whiskers |
----------------------------------------------
| dog  | super-dog   | 1   | 2    |          |
| cat  | awesome-cat | 3   |      | 3        |
| bird | cool-bird   | 2   |      |          |
----------------------------------------------
```
