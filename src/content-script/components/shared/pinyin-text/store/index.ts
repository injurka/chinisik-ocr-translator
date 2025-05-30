// interface IPinyinTextState {
//   isColored: boolean
// }

//* --- Store ----------------------------------------------- *//
// export const usePinyinTextStore = defineStore('pinyinText', {
//   state: (): IPinyinTextState => ({
//     isColored: Boolean(useCookie(PINYIN_COLORED).value || 'true'),
//   }),

//   actions: {
//     setIsColored(value: boolean) {
//       useCookie(PINYIN_COLORED, { sameSite: true }).value = `${value}`
//       this.isColored = value
//     },
//   },
// })

//* --- Utils ----------------------------------------------- *//
