### Promise

```ts
console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});

console.log('script end');
```

### 依赖更新

```tsx
export function App(){
  const a = 123
  
  useEffect(()=> {
    console.log('refresh');
  }, [a])
}
```

```tsx
export function App(){
  const b = []
  
  useEffect(()=> {
    console.log('refresh');
  }, [b])
}
```

```tsx
export function App(){
  const c = useMemo(()=> {
    return []
  }, [])
  
  useEffect(()=> {
    console.log('refresh');
  }, [c])
}
```

### Typescript

```ts
type A = {
  name: string
  age: number
}
type B = Partial<A>
```

