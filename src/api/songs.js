import http from './http'

/**
 * @param {number} type 地区类型。
 */
export function getTopSongs(type, limit = 30) {
  return http
    .get('/top/song', {
      params: {
        type,
        limit,
      },
    })
    .then((value) => {
      const songs = value.data.map((item) => {
        return {
          picUrl: item.album.blurPicUrl,
          mp3Url: item.mp3Url,
          id: item.bMusic.id,
          musicName: item.name,
          artistsName: item.artists.reduce(
            (prev, curr) => prev + curr.name,
            ''
          ),
          albumName: item.album.name,
          privilege: item.privilege.cp,
          musicId: item.privilege.id,
          duration: item.duration,
        }
      })
      // console.log('api: ', songs)
      return songs
    })
}
