// export default async function generateStaticParams() {
//   const posts = await fetch('http://localhost:3000/assets/posts.json').then((res) => res.json());
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }


export default async function generateStaticParams() {
  const posts = await fetch('http://localhost:3000/assets/posts.json').then((res) => res.json())
 
  return posts.map(({post}:{post : {postId : string, postName : string}}) => ({
    slug: {
      "postId": post.postId,
      "postName": post.postName
    },
  }))
}
