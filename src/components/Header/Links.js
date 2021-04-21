export default function getNavbarLinks() {
	return [
		{
			path: '/',
			name: 'shop',
			showOn: ['desktop', 'mobile'],
		},
		{
			path: '/collections/my-boyfriends-back',
			name: 'my boyfriends back',
			showOn: ['desktop', 'mobile'],
		},
		{
			path: '/collections/staff-edit',
			name: 'staff edit',
			showOn: ['desktop', 'mobile'],
		},
		{
			path: '/contact',
			name: 'contact',
			showOn: ['desktop', 'mobile'],
		},
		{
			path: '/cart',
			name: 'cart',
			showOn: ['desktop'],
		},
	];
}
