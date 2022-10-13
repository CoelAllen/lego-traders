import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class LegoSetsService {
  async createLegoSet(data) {
    const set = await dbContext.LegoSets.create(data);
    return set;
  }
  async getSetBySetId(legoSetId) {
    const set = await dbContext.LegoSets.findById(legoSetId);
    return set;
  }
  async getTradableSets() {
    const tradableSets = await dbContext.LegoSets.find({
      isUpForTrade: true,
    });
    return tradableSets;
  }
  async getAllSets() {
    const legoSets = await dbContext.LegoSets.find();
    return legoSets;
  }

  async getSetsByOwnerId(ownerId) {
    const sets = await dbContext.LegoSets.find({ ownerId });
    return sets;
  }
  async setTradable(legoSetId) {
    const set = await dbContext.LegoSets.findById(legoSetId)
    if (!set) { throw new BadRequest('Invalid Set ID'); }
    set.isUpForTrade = !set.isUpForTrade
    set.save()
    return set
  }
}

export const legoSetsService = new LegoSetsService();
