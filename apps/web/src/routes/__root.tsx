import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

const RootComponent = () => {
	return (
		<React.Fragment>
			<Outlet />
		</React.Fragment>
	)
}

export const Root = createRootRoute({
	component: RootComponent,
})
