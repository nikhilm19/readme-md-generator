const askAuthorGithub = require('./author-email')

describe('askAuthorEmail', () => {
  it('should return correct question format', () => {
    const emailId = 'default'
    const projectInfos = { emailId }

    const result = askAuthorEmail(projectInfos)

    expect(result).toEqual({
      type: 'input',
      message: '✉️  Email ID (use empty value to skip)',
      name: 'authorEmailId',
      default: emailId,
      filter: expect.any(Function)
    })
  })
})
