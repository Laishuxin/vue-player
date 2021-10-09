import http from '@/api/http'

export function getCategories() {
  return http.get('/playlist/hot').then((value) => {
    const list = value.tags.map((item) => item.name)
    list.unshift('全部')
    return list
  })
}

export function getHighQualityPlayList(category, limit) {
  if (!category) {
    return Promise.reject('${category} is invalid.')
  }
  limit = limit && limit > 0 ? limit : 0
  return http
    .get(`/top/playlist/highquality?limit=${limit}&cat=${category}`)
    .then((value) => {
      const list = value.playlists.map((item) => {
        return {
          name: item.name,
          id: item.id,
          imgUrl: item.coverImgUrl,
          description: item.description,
        }
      })
      return list
    })
}

export function getPlayList(category, offset, limit = 15) {
  return http
    .get('/top/playlist', {
      params: {
        cat: category,
        limit,
        offset,
      },
    })
    .then((value) => {
      return value
    })
}
