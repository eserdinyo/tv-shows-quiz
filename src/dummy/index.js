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
		music: require('@/assets/music/shamelessmusic.mp3'),
		characters: [
			{
				id: 1,
				name: 'Frank Gallagher',
				img: require('@/assets/characters/frank.jpg'),
				answers: ['Carl Gallagher', 'Lip Gallagher', 'Frank Gallagher', 'Ian Gallagher']
			},
			{
				id: 2,
				name: 'Fiona Gallagher',
				img: require('@/assets/characters/fiona.jpg'),
				answers: ['Debbie Gallagher', 'Veronica Fisher', 'Svetlana', 'Fiona Gallagher'],
			},
			{
				id: 3,
				name: 'Carl Gallagher',
				img: require('@/assets/characters/carl.jpg'),
				answers: ['Carl Gallagher', 'Lip Gallagher', 'Ian Gallagher', 'Frank Gallagher']
			}, {
				id: 4,
				name: 'Debbie Gallagher',
				img: require('@/assets/characters/debie.jpg'),
				answers: ['Debbie Gallagher', 'Veronica Fisher', 'Svetlana', 'Fiona Gallagher'],
			},
			{
				id: 5,
				name: 'Ian Gallagher',
				img: require('@/assets/characters/ian.png'),
				answers: ['Carl Gallagher', 'Lip Gallagher', 'Ian Gallagher', 'Frank Gallagher']
			},
			{
				id: 6,
				name: 'Kevin Ball',
				img: require('@/assets/characters/kevin.jpg'),
				answers: ['Frank Gallagher', 'Kevin Ball', 'Ian Gallagher', 'Liam Gallagher']
			}, {
				id: 7,
				name: 'Liam Gallagher',
				img: require('@/assets/characters/liam.jpg'),
				answers: ['Liam Gallagher', 'Frank Gallagher', 'Kevin Ball', 'Ian Gallagher']
			}, {
				id: 8,
				name: 'Veronica Fisher',
				img: require('@/assets/characters/veronica.jpg'),
				answers: ['Fiona Gallagher', 'Svetlana', 'Veronica Fisher', 'Ian Gallagher']
			},
			{
				id: 9,
				name: 'Svetlana',
				img: require('@/assets/characters/svetlena.jpg'),
				answers: ['Svetlana', 'Fiona Gallagher', 'Veronica Fisher', 'Ian Gallagher']
			}, {
				id: 10,
				name: 'Mickey Milkovich',
				img: require('@/assets/characters/mick.jpg'),
				answers: ['Frank Gallagher', 'Kevin Ball', 'Ian Gallagher', 'Mickey Milkovich']
			}

		]

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