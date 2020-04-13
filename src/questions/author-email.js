const { cleanSocialNetworkUsername } = require('../utils')

module.exports = projectInfos => ({
  type: 'input',
  message: '✉️  Email ID (use empty value to skip)',
  name: 'authorEmailId',
  default: projectInfos.emailId,
  filter: cleanSocialNetworkUsername
})
