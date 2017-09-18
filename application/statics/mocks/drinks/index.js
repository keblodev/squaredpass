
const drinksImgs = [
	//TODO: images should come from uri
	//TODO: cache remote images
	[
		require('../../../statics/images/shopscontent/0/drinks/0.jpg'),
		require('../../../statics/images/shopscontent/0/drinks/1.jpg'),
		require('../../../statics/images/shopscontent/0/drinks/2.jpg'),
		require('../../../statics/images/shopscontent/0/drinks/3.jpg'),
	],
	[
		require('../../../statics/images/shopscontent/1/drinks/0.jpg'),
		require('../../../statics/images/shopscontent/1/drinks/1.jpg'),
		require('../../../statics/images/shopscontent/1/drinks/2.jpg'),
		require('../../../statics/images/shopscontent/1/drinks/3.jpg'),
	]
];

export default [
	[
		{
			id: 	0,
			title: 	'Campfire',
			desc: 	'Your default choice',
			price:	'24',
			currency: 'CRDT',
			img:	drinksImgs[0][0]
		},
		{
			id: 1,
			title: 'Garage Society',
			desc: 'Your second choice',
			price:	'30',
			currency: 'CRDT',
			img:	drinksImgs[0][1]
		},
		{
			id: 2,
			title: 'The Desk',
			desc: 'I would not mind',
			price:	'32',
			currency: 'CRDT',
			img:	drinksImgs[0][2]
		},
		{
			id: 3,
			title: 'The Hive',
			desc: 'Ice cream in coffee, or coffee in Icecream',
			price:	'40',
			currency: 'CRDT',
			img:	drinksImgs[0][3]
		}
	],
	[
		{
			id: 	0,
			title: 	'District 6',
			desc: 	'Your default choice',
			price:	'34',
			currency: 'CRDT',
			img:	drinksImgs[1][0]
		},
		{
			id: 1,
			title: 'JustCo',
			desc: 'Your second choice',
			price:	'30',
			currency: 'CRDT',
			img:	drinksImgs[1][1]
		},
		{
			id: 2,
			title: 'The Lawn',
			desc: 'I would not mind',
			price:	'28',
			currency: 'CRDT',
			img:	drinksImgs[1][2]
		},
		{
			id: 3,
			title: 'The Outpost',
			desc: 'Ice cream in coffee, or coffee in Icecream',
			price:	'35',
			currency: 'CRDT',
			img:	drinksImgs[1][3]
		}
	]
];