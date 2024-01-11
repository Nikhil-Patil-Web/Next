import Image from 'next/image'
import { Suspense } from 'react'
import TodosList from './(user)/todos/TodosList'

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p className='text-blue-500'>Loading the todos</p>}>
        <div className='flex space-x-2'>
          <TodosList></TodosList>
        </div>
      </Suspense>
      <Suspense
        fallback={<p className='text-red-500'>Loading the shopping cart</p>}
      >
        <div className='flex space-x-2'>
          <TodosList></TodosList>
        </div>
      </Suspense>
      This is the home page
    </div>
  )
}
