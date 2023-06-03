import { Title } from "solid-start"
import Counter from "~/components/example/Counter"
import { api } from "~/utils/api"

export default function Inventory() {
  const items = api.items.getAll.useQuery(() => ({ token: "test" }))
  return (
    <main>
      <Title>Inventory</Title>
      <h1>Inventory</h1>
      <Counter />
      <pre>
        <code>{JSON.stringify(items.data, null, 2)}</code>
      </pre>
    </main>
  )
}
