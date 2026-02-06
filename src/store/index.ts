// @ts-ignore
import { createStore } from 'vuex'

interface State {
  currentPage: string
  // 可以添加其他全局状态，如用户登录状态等
}

export default createStore<State>({
  state: {
    currentPage: 'Home'
  },
  mutations: {
    setCurrentPage(state: State, page: string) {
      state.currentPage = page
    }
  },
  actions: {
    updateCurrentPage({ commit }: { commit: any }, page: string) {
      commit('setCurrentPage', page)
    }
  },
  getters: {
    getCurrentPage: (state: State) => state.currentPage
  }
})

