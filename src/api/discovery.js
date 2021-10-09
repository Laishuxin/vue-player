import http from '@/api/http'
// TODO(rushui 2021-05-04): formatting all result

export function getBanner() {
  return http.get('/banner?type=2').then(
    (value) => value.banners
    // (err) => err
  )
}

export function getRecommend(limit = 30) {
  return http
    .get('personalized', {
      params: { limit },
    })
    .then((value) => value.result)
}

export function getNewestSongs(limit = 10) {
  return http
    .get('/personalized/newsong', {
      params: { limit },
    })
    .then((value) => value.result)
}

export function getLatestMv() {
  return http.get('/personalized/mv').then((value) => {
    return value.result
  })
}
