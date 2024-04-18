import {
  Main,
  Nav,
} from '.'

interface PageProps {
  children: React.ReactNode
  className?: string
}

const Page = ({ children, className = '' }: PageProps) => {
  return (
    <div className={`page ${className}`}>
      <Nav />
      <Main>{children}</Main>
    </div>
  )
}

export { Page }
