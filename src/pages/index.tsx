import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
     <div className="fixed flex justify-center">
      <Image
        src="/logo.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={607}
        height={167}
        priority
      />
      </div>
    </main>
  )
}
