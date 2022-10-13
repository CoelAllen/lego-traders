import { dbContext } from "../db/DbContext.js";

class LegoSetsService {
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
}

export const legoSetsService = new LegoSetsService();
