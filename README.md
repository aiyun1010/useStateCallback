# Add second parameter for useState , to resolve useState hook dose not accept a callback function

## old code
```
const [count,setCount] = useState(0);
setCount(1)
```
## now
```
const [count,setCount] = useStateX(0);
setCount(1,()=>{ ... })
```
