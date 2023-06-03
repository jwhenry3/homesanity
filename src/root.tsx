// @refresh reload
import "./root.css"

import { Suspense } from "solid-js"
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start"
import { api, queryClient } from "~/utils/api"

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <api.Provider queryClient={queryClient}>
            <ErrorBoundary>
              <A href="/">Dashboard</A>
              <A href="/bills">Bills</A>
              <A href="/inventory">Inventory</A>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </api.Provider>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
