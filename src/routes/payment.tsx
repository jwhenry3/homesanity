import { Title } from "solid-start"
import Counter from "~/components/example/Counter"
import { api } from "~/utils/api"

export default function Payment() {
  const payment = api.payments.getOne.useQuery(() => ({
    token: "test",
    billId: "test",
    paymentId: "test",
  }))
  return (
    <main>
      <Title>Payments</Title>
      <h1>Payments</h1>
      <Counter />
      <pre>
        <code>{JSON.stringify(payment.data, null, 2)}</code>
      </pre>
    </main>
  )
}
