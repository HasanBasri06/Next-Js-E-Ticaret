import { Suspense } from "react"
import Loading from "./loading"
import Users from "./users"

function page() {
  return (
    <Suspense fallback={<Loading></Loading>}>
        <Users></Users>
    </Suspense>
  )
}

export default page