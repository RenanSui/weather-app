import { cn } from '@/lib/utils'
import * as React from 'react'

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  children: React.ReactNode
  layout?: 'default' | 'current' | 'details' | 'centered'
}

export function Shell({
  as: Comp = 'section',
  children,
  layout = 'default',
  className,
  ...props
}: ShellProps) {
  return (
    <Comp
      className={cn(
        'grid items-center gap-8 pb-8 pt-6 md:py-8',
        layout === 'default' && 'container',
        layout === 'current' && 'container',
        layout === 'details' && 'container max-w-lg',
        layout === 'centered' && 'mt-20 max-w-md justify-center',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
