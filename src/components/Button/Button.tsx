import {twMerge} from 'tailwind-merge';
import {BiLoaderAlt} from 'react-icons/bi';

import {ButtonProps} from './button.types';

export const Button: React.FC<ButtonProps> = ({
	children,
	color = 'primary',
	size = 'md',
	shape = 'rounded',
	loading,
	fullWidth,
	...props
}) => {
	const classes = twMerge(
		'font-bold transition inline-flex justify-center items-center gap-2',
		color === 'primary' &&
			!props.disabled &&
			'bg-sky-600 hover:bg-sky-700 text-white',
		color === 'accent' &&
			!props.disabled &&
			'bg-violet-700 hover:bg-violet-800 text-white',
		color === 'secondary' &&
			!props.disabled &&
			'bg-gray-500 hover:bg-gray-600 text-white',
		color === 'success' &&
			!props.disabled &&
			'bg-green-700 hover:bg-green-800 text-white',
		color === 'danger' &&
			!props.disabled &&
			'bg-red-700 hover:bg-red-800 text-white',
		color === 'warning' &&
			!props.disabled &&
			'bg-amber-400 hover:bg-amber-300 text-black',
		color === 'info' &&
			!props.disabled &&
			'bg-cyan-500 hover:bg-cyan-400 text-black',
		color === 'light' &&
			!props.disabled &&
			'bg-gray-50 hover:bg-gray-300 text-black',
		color === 'dark' &&
			!props.disabled &&
			'bg-black hover:opacity-80 text-white',
		size === 'sm' && 'py-2 px-5 text-sm',
		size === 'md' && 'py-2.5 px-6 text-base',
		size === 'lg' && 'py-3.5 px-8 text-base',
		shape === 'pill' && 'rounded-[40px]',
		shape === 'rounded' && 'rounded-lg',
		shape === 'square' && 'rounded-none',
		!props.disabled && 'cursor-pointer',
		props.disabled && 'bg-gray-300 text-gray-600 cursor-not-allowed',
		fullWidth && 'w-full'
	);
	return (
		<button className={classes} {...props}>
			{loading && <BiLoaderAlt className='animate-spin text-xl' />}
			{children}
		</button>
	);
};
