import http from './http'
const TYPES = {
  MUSIC: 1,
  ALBUM: 1000,
  MV: 1004,
}

/**
 * get musics by keyword
 * @param { string } keywords
 * @param { number } offset
 * @param { number } limit
 * @returns { Promise<Object> }
 *  example:
 * { total: 1,
 *   data: [{
 *      id: 1,
 *      name: 'name',
 *      artistName: 'name',
 *      album: {
 *        id: 1,
 *        name: 'name',
 *      },
 *      duration: 123,
 *      copyrightId: 1,
 *      mvid: 1, // mvid = null if not exists
 *    }
 * }]
 */
export function getMusicByKeyword(keywords, offset = 0, limit = 30) {
  return getData(keywords, TYPES.MUSIC, offset, limit).then((result) => {
    result = result.result || { songs: [] }
    const data = result.songs.map((item) => {
      return {
        id: item.id,
        name: item.name,
        artistName: _mergeName(item.artists),
        duration: item.duration,
        copyrightId: item.copyrightId,
        mvid: item.mvid > 0 ? item.mvid : null,
        album: {
          name: item.album.name,
          id: item.album.id,
        },
      }
    })
    return {
      total: result.songCount,
      data,
    }
  })
}

/**
 * get album by keyword
 * @param { string } keywords
 * @param { number } offset
 * @param { number } limit
 * @returns { Promise<Object> }
 * example:
 * {
 *  total: 1,
 *  data: [{
 *    id: 1,
 *    name: 'name',
 *    imgUrl: 'http://img.png',
 *    playCount: 222,
 *  }]
 * }
 *
 */
export function getAlbumByKeyword(keywords, offset = 0, limit = 30) {
  return getData(keywords, TYPES.ALBUM, offset, limit).then((result) => {
    result = result.result || { playlists: [] }
    const data = result.playlists.map((item) => {
      return {
        id: item.id,
        name: item.name,
        imgUrl: item.coverImgUrl,
        playCount: item.playCount,
      }
    })
    return {
      data,
      total: result.playlistCount,
    }
  })
}

/**
 *
 * @param {string } keywords
 * @param { number } offset
 * @param { number } limit
 * @returns { Promise<Object> }
 * example:
 * {
 *   total: 1,
 *  data: [{
 *    id: 1,
 *    name: 'name',
 *    artistName: 'name',
 *    imgUrl: 'http://img.png',
 *    duration: 112,
 *    playCount: 1111,
 *  }
 *  ]
 * }
 */
export function getMvByKeyword(keywords, offset = 0, limit = 30) {
  return getData(keywords, TYPES.MV, offset, limit).then((result) => {
    result = result.result || { mvs: [] }
    const data = result.mvs.map((item) => {
      return {
        id: item.id,
        name: item.name,
        artistName: item.artistName,
        playCount: item.playCount,
        duration: item.duration,
        imgUrl: item.cover,
      }
    })

    return {
      total: result.mvCount,
      data,
    }
  })
}

function _mergeName(arr) {
  if (!arr || arr.length < 0) {
    return ''
  }
  const names = arr.map((item) => item.name)
  return names.join(',')
}

function getData(keywords, type, offset, limit) {
  return http.get('/search', {
    params: {
      keywords,
      type,
      offset,
      limit,
    },
  })
}
