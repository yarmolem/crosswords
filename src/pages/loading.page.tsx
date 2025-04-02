import { LoaderIcon } from 'lucide-react'

export default function LoadingPage() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <LoaderIcon className="animate-spin size-6" />
      </div>
    </>
  )
}
