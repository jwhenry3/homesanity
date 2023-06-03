import { Title } from "solid-start"
import Counter from "~/components/example/Counter"
import { api } from "~/utils/api"

export default function Bills() {
  const bills = api.bills.getAll.useQuery(() => ({ token: "test" }))
  return (
    <main>
      <Title>Bills</Title>
      <h1>Bills</h1>
      <Counter />
      <pre>
        <code>{JSON.stringify(bills.data, null, 2)}</code>
      </pre>
    </main>
  )
}
