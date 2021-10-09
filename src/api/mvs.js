import http from './http'
import { formatNumber } from '@/utils/common'

export function getMvs(area, type, order, offset = 0, limit = 30) {
  return http
    .get('/mv/all', {
      params: {
        area,
        type,
        order,
        offset,
        limit,
      },
    })
    .then((result) => {
      const data = result.data.map((item) => {
        return {
          artistId: item.artistId,
          artistName: item.artistName,
          imgUrl: item.cover,
          id: item.id,
          playCount: formatNumber(item.playCount),
          mvName: item.name,
        }
      })
      return {
        total: result.count,
        data,
      }
    })
}
