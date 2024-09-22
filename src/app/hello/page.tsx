export default function HelloPage() {
  return (
    <h1>Hello Page</h1>
  )
}


//Here Page router and route handler are in conflict, but TypeScript gives preference to route handler
//and when we visit /hello,  route handler will get executed and we will see "Hello World from New API"