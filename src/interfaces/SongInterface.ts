export enum Category {
  Hiphop = 'Hip-Hop',
  Rock = 'Rock',
  Techno = 'Techno',
  Electronic = 'Electronic',
  Dubstep = 'Dubstep',
  Pop = 'Pop',
  Arabesque = 'Arabesque'
}

export interface SongType {
  id: number
  title: string
  singer: string
  category: Category
  src: string
  song_img: string
}
