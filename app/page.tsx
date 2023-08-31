// "use client"

import { serverClient } from "./_trpc/serverClient"

// import SayHello from "@/components/SayHello";

export default async function Home() {
  const msg = await serverClient.getTodos()
  return (
    <main>
      <h1>{msg}</h1>
      {/* <SayHello/> */}
    </main>
  )
}
