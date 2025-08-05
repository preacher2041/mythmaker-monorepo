import typescriptLogo from '/typescript.svg'
import { Header, Counter } from '@mythmaker/ui'

export const App = () => (
	<div className='bg-mint-500'>
		<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
			<img src='/vite.svg' className='logo' alt='Vite logo' />
		</a>
		<a
			href='https://www.typescriptlang.org/'
			target='_blank'
			rel='noreferrer'>
			<img
				src={typescriptLogo}
				className='logo vanilla'
				alt='TypeScript logo'
			/>
		</a>
		<Header title='Web' />
		<div className='card'>
			<Counter />
		</div>
	</div>
)
