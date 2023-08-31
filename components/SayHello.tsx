"use client"

import { trpc } from "@/utils/trpc";

export default function SayHello() {

  const hello = trpc.hello.useQuery({ text: 'client' });
  return (
    <h1>{hello.data?.greeting}</h1>
  )
}
