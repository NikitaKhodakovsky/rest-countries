import React, { HTMLAttributes } from 'react'

interface WrapperProps<T> extends HTMLAttributes<T> {
	classNames?: (string | undefined | null)[]
	as?: string
}

export function Wrapper<T>({ className, classNames = [], children, as, ...props }: WrapperProps<T>) {
	return React.createElement(
		as || 'div',
		{
			className: [className, ...classNames].filter((i) => i).join(' '),
			...props
		},
		children
	)
}
