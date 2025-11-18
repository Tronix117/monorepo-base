import { getHelloWorld } from '@my-project/shared-utils'

export const dynamic = 'force-dynamic'

async function getState() {
  try {
    const res = await fetch('http://localhost:3001/state')
    if (!res.ok) throw new Error('bad status')
    return await res.json()
  } catch {
    return {
      status: 'offline',
      timestamp: new Date().toISOString(),
      uptime: 0,
      message: 'API offline',
    }
  }
}

export default async function Page() {
  const state = await getState()
  return (
    <main>
      <h1>App State</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>{getHelloWorld()}</p>
    </main>
  )
}
