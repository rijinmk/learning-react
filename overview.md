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
