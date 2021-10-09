import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_MUSIC_ID,
  SET_MUSIC_URL,
  SET_PLAY_LIST_TOTAL,
  SET_PLAY_LIST_OFFSET,
  SET_PLAY_LIST_LIMIT,
  SET_PLAY_LIST_LIST,
  SET_PLAY_LIST_CATEGORY,
} from './mutation-types'
import { SET_MUSIC, SET_PLAY_LIST } from './action-types'
import { getMusicById } from '@/api/'
import { getPlayList } from '../api/play-list'

Vue.use(Vuex)
const state = {
  music: {
    id: null,
    url: '',
  },
  playList: {
    list: [],
    total: 0,
    offset: 0,
    limit: 15,
    // TODO(rushui 2021-07-03): 动态绑定
    category: '流行',
  },
}

const mutations = {
  /**
   * Set music id.
   * @param {State} state vuex state
   * @param {number} payload music id
   */
  [SET_MUSIC_ID](state, payload) {
    state.music.id = payload
  },

  /**
   * Set music url
   * @param {State} state vuex state
   * @param {string} payload music url
   */
  [SET_MUSIC_URL](state, payload) {
    state.music.url = payload
  },
  [SET_PLAY_LIST_CATEGORY](state, payload) {
    state.playList.category = payload
    actions.SET_PLAY_LIST()
  },
  [SET_PLAY_LIST_TOTAL](state, payload) {
    state.playList.total = payload
    // actions.SET_PLAY_LIST()
  },
  [SET_PLAY_LIST_OFFSET](state, payload) {
    state.playList.offset = payload >= 0 ? payload : 0
    // console.log('vuex: offset = ', state.playList.offset)
    // actions.SET_PLAY_LIST()
  },
  [SET_PLAY_LIST_LIMIT](state, payload) {
    state.playList.limit = payload
  },
  [SET_PLAY_LIST_LIST](state, payload) {
    state.playList.list = payload
  },
}

const actions = {
  /**
   * Set music according to the music id.
   * @param {*} param0
   * @param {number} payload musicId
   */
  [SET_MUSIC]({ commit }, payload) {
    getMusicById(payload)
      .then((value) => {
        // console.log('vuex SET_MUSIC: ')
        // console.log(value)
        const url = value && value.url
        commit(SET_MUSIC_URL, url || '')
      })
      .catch((err) => {
        process.env.NODE_ENV !== 'production' &&
          console.log(('getMusicById err', err))
      })
    commit(SET_MUSIC_ID, payload)
  },
  async [SET_PLAY_LIST]({ state, commit }) {
    const playList = state.playList
    let { playlists, total } = await getPlayList(
      playList.category,
      playList.offset,
      playList.limit
    )

    if (total !== playList.total) {
      commit(SET_PLAY_LIST_TOTAL, total)
    }

    playlists = playlists.map((item) => {
      return {
        imgUrl: item.coverImgUrl,
        title: item.name,
        playCount: item.playCount,
        id: item.coverImgId,
        to: '#',
      }
    })
    commit(SET_PLAY_LIST_LIST, playlists)
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
})
