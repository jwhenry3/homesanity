import { Title } from "solid-start"
import Counter from "~/components/example/Counter"
import { api } from "~/utils/api"

export default function Bill() {
  const bill = api.bills.getOne.useQuery(() => ({
    token: "test",
    billId: "test",
  }))
  return (
    <main>
      <Title>Bill</Title>
      <h1>Bill</h1>
      <Counter />
      <pre>
        <code>{JSON.stringify(bill.data, null, 2)}</code>
      </pre>
    </main>
  )
}
