import type { Metadata } from 'next'
import TodosList from './TodosList'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex'>
      <div>
        <TodosList></TodosList>
      </div>
      <div className='flex-1'>{children}</div>
    </main>
  )
}
