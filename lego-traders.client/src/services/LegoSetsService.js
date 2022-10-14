import { AppState } from "../AppState"
import { LegoSet } from "../models/LegoSet.js";
import { api, legoApi } from "./AxiosService"

class LegoSetsService {
  async toggleIsUpForTrade(id) {
    const res = await api.put('/api/sets/' + id + '/tradable')
    const update = res.data
    const newLegoSet = AppState.legoSet.findIndex(l => l.id == id)
    AppState.legoSet.splice(newLegoSet, 1, update)
  }

  async getLegoSetById(id) {
    const res = await api.get('/api/sets/' + id)
    console.log('[getLegoSetById]', res.data);
    AppState.activeLegoSet = res.data
  }
  async addSetToAccount(legoSet) {
    console.log(legoSet);
    const res = await api.post('/account/sets', legoSet)
    console.log('addSetToAccount', res.data);
  }
  async getMyLegoSets(accountId) {
    const res = await api.get(`api/sets/profile/` + accountId)
    // TODO Change after server side gets updated
    console.log('getMyLegoSets', res);
    AppState.legoSet = res.data.map(s => new LegoSet(s))
  }
  async getSetsByThemeId(theme_id,) {
    const res = await legoApi.get(`sets`, {
      params: {
        theme_id,
        page_size: 50
      },
    })
    console.log('theme from api', res.data);
    AppState.apiSets = res.data.results
    AppState.previousPage = res.data.previous
    AppState.nextPage = res.data.next

  }

  async getSetsBySetNum(term) {
    const res = await legoApi.get('sets/', {
      params: {
        search: term,
      }
    })
    AppState.apiSets = res.data.results
  }

  async getSetAlternates() {
    const res = await legoApi.get('sets/10211-1/alternates')
    console.log(res.data);
    AppState.activeApiSet = res.data.results
  }

  async goPage(url) {
    const res = await legoApi.get(url)
    AppState.apiSets = res.data.results
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }

}
export const legoSetsService = new LegoSetsService()