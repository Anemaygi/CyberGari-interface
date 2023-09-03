import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface DocsConfig {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'Documentation',
			to: '/docs',
		},
		{
			title: 'Components',
			to: '/docs/components/accordion',
		},
		{
			title: 'Examples',
			to: '/examples',
		},
		{
			title: 'Figma',
			to: '/docs/figma',
		},
		{
			title: 'GitHub',
			to: 'https://github.com/shadcn/ui',
			external: true,
		},
		{
			title: 'Twitter',
			to: 'https://twitter.com/shadcn',
			external: true,
		},
	],
	sidebarNav: [
		{
			title: 'Getting Started',
			items: [
				{
					title: 'Introduction',
					to: '/docs',
					items: [],
				},
				{
					title: 'Installation',
					to: '/docs/installation',
					items: [],
				},
				{
					title: 'Theming',
					to: '/docs/theming',
					items: [],
				},
				{
					title: 'CLI',
					to: '/docs/cli',
					items: [],
				},
				{
					title: 'Typography',
					to: '/docs/components/typography',
					items: [],
				},
			],
		},
		{
			title: 'Community',
			items: [
				{
					title: 'Figma',
					to: '/docs/figma',
					items: [],
				},
			],
		},
		{
			title: 'Forms',
			items: [
				{
					title: 'React Hook Form',
					to: '/docs/forms/react-hook-form',
					label: 'New',
					items: [],
				},
				{
					title: 'TanStack Form',
					to: '#',
					items: [],
					label: 'Soon',
					disabled: true,
				},
			],
		},
		{
			title: 'Components',
			items: [
				{
					title: 'Accordion',
					to: '/docs/components/accordion',
					items: [],
				},
				{
					title: 'Alert',
					to: '/docs/components/alert',
					items: [],
				},
				{
					title: 'Alert Dialog',
					to: '/docs/components/alert-dialog',
					items: [],
				},
				{
					title: 'Aspect Ratio',
					to: '/docs/components/aspect-ratio',
					items: [],
				},
				{
					title: 'Avatar',
					to: '/docs/components/avatar',
					items: [],
				},
				{
					title: 'Badge',
					to: '/docs/components/badge',
					items: [],
				},
				{
					title: 'Button',
					to: '/docs/components/button',
					items: [],
				},
				{
					title: 'Calendar',
					to: '/docs/components/calendar',
					items: [],
				},
				{
					title: 'Card',
					to: '/docs/components/card',
					items: [],
				},
				{
					title: 'Checkbox',
					to: '/docs/components/checkbox',
					items: [],
				},
				{
					title: 'Collapsible',
					to: '/docs/components/collapsible',
					items: [],
				},
				{
					title: 'Combobox',
					to: '/docs/components/combobox',
					items: [],
				},
				{
					title: 'Command',
					to: '/docs/components/command',
					items: [],
				},
				{
					title: 'Context Menu',
					to: '/docs/components/context-menu',
					items: [],
				},
				{
					title: 'Data Table',
					to: '/docs/components/data-table',
					label: 'New',
					items: [],
				},
				{
					title: 'Date Picker',
					to: '/docs/components/date-picker',
					items: [],
				},
				{
					title: 'Dialog',
					to: '/docs/components/dialog',
					items: [],
				},
				{
					title: 'Dropdown Menu',
					to: '/docs/components/dropdown-menu',
					items: [],
				},
				{
					title: 'Hover Card',
					to: '/docs/components/hover-card',
					items: [],
				},
				{
					title: 'Input',
					to: '/docs/components/input',
					items: [],
				},
				{
					title: 'Label',
					to: '/docs/components/label',
					items: [],
				},
				{
					title: 'Menubar',
					to: '/docs/components/menubar',
					items: [],
				},
				{
					title: 'Navigation Menu',
					to: '/docs/components/navigation-menu',
					items: [],
				},
				{
					title: 'Popover',
					to: '/docs/components/popover',
					items: [],
				},
				{
					title: 'Progress',
					to: '/docs/components/progress',
					items: [],
				},
				{
					title: 'Radio Group',
					to: '/docs/components/radio-group',
					items: [],
				},
				{
					title: 'Scroll Area',
					to: '/docs/components/scroll-area',
					items: [],
				},
				{
					title: 'Select',
					to: '/docs/components/select',
					items: [],
				},
				{
					title: 'Separator',
					to: '/docs/components/separator',
					items: [],
				},
				{
					title: 'Sheet',
					to: '/docs/components/sheet',
					items: [],
				},
				{
					title: 'Skeleton',
					to: '/docs/components/skeleton',
					items: [],
				},
				{
					title: 'Slider',
					to: '/docs/components/slider',
					items: [],
				},
				{
					title: 'Switch',
					to: '/docs/components/switch',
					items: [],
				},
				{
					title: 'Table',
					to: '/docs/components/table',
					label: 'New',
					items: [],
				},
				{
					title: 'Tabs',
					to: '/docs/components/tabs',
					items: [],
				},
				{
					title: 'Textarea',
					to: '/docs/components/textarea',
					items: [],
				},
				{
					title: 'Toast',
					to: '/docs/components/toast',
					items: [],
				},
				{
					title: 'Toggle',
					to: '/docs/components/toggle',
					items: [],
				},
				{
					title: 'Tooltip',
					to: '/docs/components/tooltip',
					items: [],
				},
			],
		},
	],
};
