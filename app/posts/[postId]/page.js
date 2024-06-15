import Post from "./post"

function page({params}) {
  return (
    <Post postId={params.postId}></Post>
  )
}

export default page