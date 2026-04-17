// Utility functions
module.exports = {
  formatDate: (d) => new Date(d).toISOString(),
  randomId: () => Math.random().toString(36).slice(2, 13),
  sleep: (ms) => new Promise(r => setTimeout(r, ms)),
};
