interface HeaderProps {
  children: React.ReactNode
  className?: string
  variant?: string
}

const Header = ({ children, className = '', variant = '' }: HeaderProps) => {
  return (
    <header className={`header ${className} ${variant}`}>
      {children}
    </header>
  )
}

export { Header }
