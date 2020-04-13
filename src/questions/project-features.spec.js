const askProjectFeatures = require('./project-features')

describe('askProjectFeatures', () => {
  it('should return correct question format', () => {
    const features = 'features'
    const projectInfos = { features }

    const result = askProjectFeatures(projectInfos)

    expect(result).toEqual({
      type: 'input',
      message: '💡  Project features (use empty value to skip)',
      name: 'projectFeatures',
      default: features
    })
  })
})
