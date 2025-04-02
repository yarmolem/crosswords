export default function PageLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full w-full flex-col flex-1 items-center justify-center">
      {children}
    </div>
  )
}
