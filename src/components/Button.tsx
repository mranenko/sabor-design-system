interface ButtonProps {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  href?: string
  variant?: string
}

const Button = ({
  as = 'button',
  children,
  className = '',
  variant = 'primary solid',
  ...props
}: ButtonProps) => {
  const Component = as
  
  return (
    <Component
      className={`button ${className} ${variant}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export { Button }
