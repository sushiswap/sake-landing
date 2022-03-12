const withVideos = require("next-videos");

module.exports = {
  future: {
    webpack5: true,
  },
  ...withVideos(),
};
