module.exports = {
    publishers: [
      {
        name: '@electron-forge/publisher-github',
        config: {
          repository: {
            owner: '8Mostafa0',
            name: 'Electron_React'
          },
          prerelease: false,
          draft: true
        }
      }
    ]
  }