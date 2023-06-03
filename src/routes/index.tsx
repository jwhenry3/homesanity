import { Title } from "solid-start"
import Counter from "~/components/example/Counter"
import { api } from "~/utils/api"

export default function Dashboard() {
  const hello = api.example.hello.useQuery(() => "World")
  return (
    <main>
      <Title>Dashboard</Title>
      <h1>Dashboard</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <pre>
        <code>{JSON.stringify(hello.data, null, 2)}</code>
      </pre>
    </main>
  )
}
