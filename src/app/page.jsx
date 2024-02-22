import ListAlbums from '@/components/ListAlbums'

export default function Home() {
	return (
		<h1 className='pt-28 md:pl-72 p-8'>
			<ListAlbums title='Spotify Playlist' />
			<ListAlbums title='Spotify Playlist' />
			<ListAlbums title='Spotify Playlist' />
			<ListAlbums title='Spotify Playlist' />
		</h1>
	)
}
