import { Title } from "solid-start"
import Counter from "~/components/example/Counter"
import { api } from "~/utils/api"

export default function Item() {
  const item = api.items.getOne.useQuery(() => ({
    token: "test",
    itemId: "test",
  }))
  return (
    <main>
      <Title>Item</Title>
      <h1>Item</h1>
      <Counter />
      <pre>
        <code>{JSON.stringify(item.data, null, 2)}</code>
      </pre>
    </main>
  )
}
