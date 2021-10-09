/**
 * Format number
 * @param { Number | string } number
 * @returns { string } formatted number
 */
export const formatNumber = (number) => {
  number = Number(number) || 0
  const TEN_KILO = 10000
  if (number > 10 * TEN_KILO) {
    return parseInt(number / TEN_KILO) + '万'
  } else {
    return `${number}`
  }
}
