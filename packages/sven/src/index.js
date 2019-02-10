import freesewing from "freesewing";
import Brian from "@freesewing/brian";
import plugins from "@freesewing/plugin-bundle";
import config from "../config";
// Parts
import draftFront from "./front";
import draftSleeve from "./sleeve";
import draftCuff from "./cuff";
import draftWaistband from "./waistband";

// Create pattern
const Sven = freesewing.create(config, plugins);

// Attach per-part draft methods to prototype
Sven.prototype.draftBase = function(part) {
  return new Brian(this.settings).draftBase(part);
};
Sven.prototype.draftFrontBase = function(part) {
  return new Brian(this.settings).draftFront(part);
};
Sven.prototype.draftBackBase = function(part) {
  return new Brian(this.settings).draftBack(part);
};
Sven.prototype.draftSleeveBase = function(part) {
  let brian = new Brian(this.settings);
  return brian.draftSleeve(brian.draftSleevecap(part));
};
Sven.prototype.draftFront = draftFront;
Sven.prototype.draftBack = draftFront;
Sven.prototype.draftSleeve = draftSleeve;
Sven.prototype.draftCuff = draftCuff;
Sven.prototype.draftWaistband = draftWaistband;

export default Sven;
