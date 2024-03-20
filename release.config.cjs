module.exports = {
  branches: ['main', { name: 'dev', channel: 'dev', prerelease: 'dev' }],
  tagFormat: 'v${version}',
  repositoryUrl: 'https://github.com/mParticle/aquarium',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'ci', release: 'patch' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'build', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'revert', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
      },
    ],
    ['@semantic-release/npm'],
    [
      '@semantic-release/github',
      {
        assets: ['dist/**'],
      },
    ],
    [
      '@semantic-release/git', 
      {
        'assets': ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ],
}
