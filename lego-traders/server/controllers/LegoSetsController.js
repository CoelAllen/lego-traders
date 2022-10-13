import { Auth0Provider } from "@bcwdev/auth0provider";
import { legoSetsService } from "../services/LegoSetsService.js";
import BaseController from "../utils/BaseController.js";

export class LegoSetsController extends BaseController {
  constructor() {
    super("api/sets");
    this.router
      .get("", this.getAllSets)
      .get("/:legoSetId", this.getSetBySetId)
      .get("/profile/:ownerId", this.getSetsByOwnerId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .put("/:setId/tradable", this.setTradable)
  }
  async setTradable(req, res, next) {
    try {
      const set = await legoSetsService.setTradable(req.params.setId)
      res.send(set)
    } catch (error) {
      next(error)
    }
  }
  async getSetsByOwnerId(req, res, next) {
    try {
      const sets = await legoSetsService.getSetsByOwnerId(req.params.ownerId);
      res.send(sets);
    } catch (error) {
      next(error);
    }
  }
  async getSetBySetId(req, res, next) {
    try {
      const set = await legoSetsService.getSetBySetId(req.params.legoSetId);
      res.send(set);
    } catch (error) {
      next(error);
    }
  }
  async getTradableSets(req, res, next) {
    try {
      const tradableSets = await legoSetsService.getTradableSets();
      res.send(tradableSets);
    } catch (error) {
      next(error);
    }
  }
  async getAllSets(req, res, next) {
    try {
      const legoSets = await legoSetsService.getAllSets();
      res.send(legoSets);
    } catch (error) {
      next(error);
    }
  }
}
