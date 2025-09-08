
What is State in React?

In React, state is a built-in object that holds dynamic data or information about a component.

Think of state as the memory of a component.
When state changes, React automatically re-renders that part of the UI so it reflects the new data.

Dynamic UI Updates → When state changes, React re-renders only the affected parts of the UI (efficient updates).

Component Memory → State lets components "remember" data between renders.



In React, Hooks are special functions that let you “hook into” React features (like state, lifecycle, and context) without using class components.


| **Hook**      | **Purpose**                                                  | **Example**                                                   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| `useState`    | Add state to a functional component                      | `const [count, setCount] = useState(0)`                       |
| `useEffect`   | Handle side effects (API calls, timers, subscriptions)   | `useEffect(() => { fetchData() }, [])`                        |
| `useContext`  | Access context values without prop drilling              | `const theme = useContext(ThemeContext)`                      |
| `useRef`      | Store a mutable value or access DOM elements directly    | `const inputRef = useRef(null)`                               |
| `useMemo`     | Optimize performance by memoizing expensive calculations | `const result = useMemo(() => heavyCalc(), [deps])`           |
| `useCallback` | Memoize functions to avoid unnecessary re-renders            | `const handleClick = useCallback(() => {...}, [deps])`        |
| `useReducer`  | Manage complex state logic (like Redux)                  | `const [state, dispatch] = useReducer(reducer, initialState)` |


What are Props in React?

Props (short for properties) are used to pass data from a parent component to a child component.
Think of props as arguments to a function — they make components reusable and dynamic.

Key Features of Props

Props are read-only (cannot be changed by the child).
They make components dynamic and reusable.
You can pass any data type (string, number, array, object, even functions).


What is Props Drilling?

Props Drilling happens when you have to pass props through multiple levels of components just to reach a deeply nested child.

Solution to Props Drilling

When props drilling becomes messy, we can use:

React Context API → Share data globally without passing props manually at every level.
State management libraries → Redux, Zustand, Recoil, Jotai, etc.


What is children in React?

In React, children is a special prop that represents whatever you put between the opening and closing tags of a component.

It allows you to create wrapper components or layouts that can wrap other components or content dynamically.