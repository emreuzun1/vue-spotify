import type { PlayList } from '@/interfaces/PlaylistInterface'
import type { SongType } from '@/interfaces/SongInterface'
import { Category } from '@/interfaces/SongInterface'

export const songData: SongType[] = [
  {
    id: 0,
    title: 'Venom',
    singer: 'Eminem',
    category: Category.Hiphop,
    src: '/songs/eminem-venom.mp3',
    song_img:
      'https://upload.wikimedia.org/wikipedia/en/7/73/Venom_%28Eminem_song%29_single_cover.jpg'
  },
  {
    id: 1,
    title: 'Numb Encore',
    singer: 'Linkin Park',
    category: Category.Rock,
    src: '/songs/linkinpark-numbencore.mp3',
    song_img: 'https://i.scdn.co/image/ab67616d0000b273d3acd0f2186daa8e4cb0f65b'
  },
  {
    id: 2,
    title: 'Invicible',
    singer: 'Pop Smoke',
    category: Category.Hiphop,
    src: '/songs/popsmoke-invicible.mp3',
    song_img: 'https://i1.sndcdn.com/artworks-SWDrSZ43lYJQ-0-t500x500.jpg'
  },
  {
    id: 3,
    title: 'Unholy',
    singer: 'Sam Smith ft.  Kim Petras',
    category: Category.Pop,
    src: '/songs/samsmith-unholy.mp3',
    song_img: 'https://i1.sndcdn.com/artworks-ZYBBLAOHBIT6-0-t500x500.jpg'
  },
  {
    id: 4,
    title: 'Goosebumps',
    singer: 'Travis Scott',
    category: Category.Hiphop,
    src: '/songs/travisscott-goosebumps.mp3',
    song_img:
      'https://cdns-images.dzcdn.net/images/cover/a2f66f08468fb9897019e82ffb7a5fcb/500x500.jpg'
  },
  {
    id: 5,
    title: 'Pembe Mezarlık',
    singer: 'Model',
    category: Category.Rock,
    src: '/songs/model-pembemezarlik.mp3',
    song_img: 'https://images.genius.com/2aad4d47cc7cb816525862dc5f19ccff.1000x1000x1.png'
  },
  {
    id: 6,
    title: 'Yalnızlığın Çaresini Bulmuşlar',
    singer: 'Gripin',
    category: Category.Pop,
    src: '/songs/gripin-yalnizincaresinibulmuslar.mp3',
    song_img: 'https://upload.wikimedia.org/wikipedia/tr/1/13/Yalnizligincaresi.jpg'
  },
  {
    id: 7,
    title: 'Çoğu Gitti Azı Kaldı',
    singer: 'Azer Bülbül',
    category: Category.Arabesque,
    src: '/songs/azerbulbul-cogugittiazikaldi.mp3',
    song_img: 'https://lastfm.freetls.fastly.net/i/u/300x300/c4d957614094487fd9fadf0e4ba0d914.jpg'
  }
]
export const playlistData: PlayList[] = []
