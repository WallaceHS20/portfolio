export default {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(feature|fix|chore|docs|refactor): #(\d+) (.+)$/,
      headerCorrespondence: ["type", "ticket", "subject"],
    },
  },
  rules: {
    "header-max-length": [2, "always", 190],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
}
