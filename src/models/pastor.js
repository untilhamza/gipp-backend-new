const mongoose = require("mongoose");
const Leader = require("./leader");

const Pastor = Leader.discriminator(
  "GroupLeader",
  new mongoose.Schema(
    {
      church: { type: mongoose.Types.ObjectId, required: true, ref: "Church" },
    },
    { discriminatorKey: "kind" }
  )
);

module.exports = Pastor;
