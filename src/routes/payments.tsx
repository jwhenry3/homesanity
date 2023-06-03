import { Title } from "solid-start"
import Counter from "~/components/example/Counter"
import { api } from "~/utils/api"

export default function Payments() {
  const payments = api.payments.getAll.useQuery(() => ({ token: "test" }))
  return (
    <main>
      <Title>Payments</Title>
      <h1>Payments</h1>
      <Counter />
      <pre>
        <code>{JSON.stringify(payments.data, null, 2)}</code>
      </pre>
    </main>
  )
}
