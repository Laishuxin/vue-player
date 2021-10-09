import http from '@/api/http'

/**
 * Get music by music id.
 * @param {number} id music id
 * @returns {Promise<Object | undefined>} music detail
 */
export function getMusicById(id) {
  return http
    .get('/song/url', {
      params: {
        id,
      },
    })
    .then(value => {
      return value.data && value.data[0]
    })
}
