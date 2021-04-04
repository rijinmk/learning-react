## React Overview

### Class based components: 

- Component Lifecycle: 
    - Mount: 
        - `constructor ()`
        - `getDerivedStateFromProps()`
        - `render()`
        - `componentDidMount()`

    - Update: 
        - `constructor()`
        - `shouldComponentUpdate()`
        - `render()`
        - `getSnapshotBeforeUpdate()`
        - `componentDidUpdate()`

### Functional Components

- `useState()`: Equivalent to `state = {}` from Class Based
- `useEffect()`: Life-Cycle for functional components
```javascript
const [item, setItem] = useState(0); 
useEffect(() => {
    console.log("Mount"); 
    return () => {
        console.log("Unmount"); 
    }
}, []); 
```
- `useRef()`
```javascript
const buttonRef = useRef(null);
...
useEffect(() => {
    plusBtn.current.click(); 
}, []); 
...
<button ref={buttonRef} />
```

### HOC (High Order Components)

Refer: 

- `rijin/learn-react-6.1/src/HOC/widthClass.js`
- `rijin/learn-react-6.1/src/container/App.js`, **Line 45**

### PureComponent 

- Only for classBased Components
- Import this instead of `Component`
- This reduces the number of lines
- This reduces the condition on: `shouldComponentUpdate()`

### React.Fragments

- To get rid of outer `<div>` 
- Replace the outer most div to `<React.Fragment>`

### React Context

- **In JSX**
    - Create `rijin/learn-react-6.1/src/context/auth-context.js`
    - Use that in `rijin/learn-react-6.1/src/container/App.js` as `<AuthContext.Provider>`
    - Pass the values in that to get the values in the sub-sub components
    - To use the context in the sub-sub component, Use `<AuthContext.Consumer>`
    - Within that tag, Call the JSX in a function with context as an argument

```javascript
<AuthContext.Consumer>
    {(context) => {<JSX CODE>}}
</AuthContext.Consumer>
```

- **In class based life cycle**

```javascript
import AuthContext from '../context/auth-context'; 
...
static contextType = AuthContext; 
... 
**In ComponentDidMount**, 
console.log(this.context); 
```

- **In functional components**

```javascript
import {useContext} from 'react'; 
...
const authContext = useContext(AuthContext); 
...
**In useEffect**, 
console.log('FROM FUNCTIONAL: ', authContext);
```