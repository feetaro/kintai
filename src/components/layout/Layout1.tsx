import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>
        <p>Layout1のheaderだよ。</p>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>Layout1のfooterだよ</p>
      </footer>
    </>
  )
}