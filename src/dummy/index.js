export const shows = [
	{
		id: 1,
		name: 'Game Of Thrones',
		image: require('@/assets/series/gameofthrones.jpg'),
		bg: require('@/assets/series/bg-gameofthrones.jpeg'),
		music: require('@/assets/music/gameofthronesmusic.mp3'),
		characters: [
			{
				id: 1,
				name: 'Arya Stark',
				img: require('@/assets/characters/arya.png'),
				answers: ['Sansa Stark', 'Arya Stark', 'Catelyn Stark', 'Bran Stark']
			},
			{
				id: 2,
				name: 'Jon Snow',
				img: require('@/assets/characters/john.jpg'),
				answers: ['Jon Snow', 'foo', 'Bar', 'Baz']

			},
			{
				id: 3,
				name: 'Sansa Stark',
				img: require('@/assets/characters/sansa.jpg'),
				answers: ['Sansa Stark', 'foo', 'Bar', 'Baz']
			}
		]
	}, {
		id: 2,
		name: 'Shameless',
		image: require('@/assets/series/shameless.jpg'),
		bg: require('@/assets/series/bg-shameless.jpg'),
		music: require('@/assets/music/shamelessmusic.mp3')

	}, {
		id: 3,
		name: 'Silicon Valley',
		image: require('@/assets/series/siliconvalley.jpg'),
		bg: require('@/assets/series/bg-silicon-valley.jpg')
	}, {
		id: 4,
		name: 'Vikings',
		image: require('@/assets/series/vikings.jpg'),
		bg: require('@/assets/series/bg-vikings.jpg'),
		music: require('@/assets/music/vikingsmusic.mp3'),
	}
]