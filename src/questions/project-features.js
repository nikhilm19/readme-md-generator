module.exports = projectInfos => ({
  type: 'input',
  message: '💡  Project features (use empty value to skip',
  name: 'projectFeatures',
  default: projectInfos.features
})
