import type { SongType } from './SongInterface'

export interface PlayList {
  id: number
  title: string
  playlist_img: string
  songs: SongType[]
}
