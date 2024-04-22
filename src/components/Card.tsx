interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: string
}

const Card = ({ children, className = '', variant = '' }: CardProps) => {
  return (
    <div className={`card ${className} ${variant}`}>
      {children}
    </div>
  )
}

export { Card }
