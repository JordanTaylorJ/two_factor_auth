
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
    <h1>Home Page</h1>
    <Link href='/login'> Login </Link>
    <Link href='signup'>Create Account</Link>
    </main>
  )
}
