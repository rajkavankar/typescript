### Variables

```typescript
let id: number = 5
let title: string = "Hello world"
let isActive: boolean = false
let x: any = true
x = "anything"
```

### Arrays

```typescript
// Arrays
let ids: number[] = [1, 2, 3, 4, 5]
let any: any[] = [1, true, "Hello"]
```

### Tuples

```typescript
// Tuple
let user: [number, string, boolean] = [2, "Raj", true]

// Tuple array
let employee: [number, string][] = [
  [1, "Raj"],
  [2, "Ram"],
]
```

### Union and enums

```typescript
// Union
let pid: number | string

pid = 10
pid = "10"

// Enums
enum Direction1 {
  Up = 2,
  Down,
  Left,
  Rignt,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Rignt = "Right",
}

console.log(Direction2.Up)
console.log(Direction2.Left)
```

### Objects

```typescript
// Objects
const person: {
  id: number
  name: string
} = {
  id: 1,
  name: "Raj ",
}

type Person = {
  id: number
  name: string
}

const person1: Person = {
  id: 2,
  name: "Rajesh",
}
```

### Type assertion

```typescript
// Type Assertion
let cid: any = 1

let customer = <number>cid
// --------OR-------------
let customer = cid as number
```

### Functions

```typescript
// Functions
function add(x: number, y: number): number {
  return x + y
}

function print(message: string | number): void {
  console.log(message)
}
```

### Interfaces

```typescript
// Interfaces

interface UserInterface {
  readonly id: number
  name: string
  age?: number //optional
}

const user1: UserInterface = {
  id: 2,
  name: "Rajesh",
}

// Function interface

interface Mathfunc {
  (x: number, y: number): number
}

const addition: Mathfunc = (x: number, y: number): number => x + y
const sub: Mathfunc = (x: number, y: number): number => x - y
```

### Class

```typescript
// Classes

class Company {
  private id: number
  protected name: string
  isAdmin: boolean

  constructor(id: number, name: string, isAdmin: boolean) {
    this.id = id
    this.name = name
    this.isAdmin = isAdmin
  }

  promote() {
    return `${this.name} is now promoted`
  }
}

const raj = new Company(1, "Raj", true)
const rajesh = new Company(2, "Rajesh", false)
```

### Class with interface

```typescript
// Classes with interface

interface CompanyInterface {
  isAdmin: boolean
  promote(): string
}

class Company implements CompanyInterface {
  private id: number
  protected name: string
  isAdmin: boolean

  constructor(id: number, name: string, isAdmin: boolean) {
    this.id = id
    this.name = name
    this.isAdmin = isAdmin
  }

  promote() {
    return `${this.name} is now promoted`
  }
}

const raj = new Company(1, "Raj", true)
const rajesh = new Company(2, "Rajesh", false)
```

### Inheritance

```typescript
// Super class
class Company {
  private id: number
  protected name: string
  isAdmin: boolean

  constructor(id: number, name: string, isAdmin: boolean) {
    this.id = id
    this.name = name
    this.isAdmin = isAdmin
  }

  promote() {
    return `${this.name} is now promoted`
  }
}

// Sub class
class Employee extends Company {
  salary: number

  constructor(id: number, name: string, isAdmin: boolean, salary: number) {
    super(id, name, isAdmin)
    this.salary = salary
  }
}

const emp = new Employee(3, "Shiv", true, 50000)

console.log(emp.register())
```

### Generics

```typescript
const getArray = <T>(items: T[]): T[] => {
  return new Array().concat(items)
}

const numArray = getArray<number>([1, 2, 3])
const strArray = getArray<string>(["brad", "jack", "jill"])
```
