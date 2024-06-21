export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'footer-max-line-length': [2, 'always', '500'],
    'body-max-line-length': [2, 'always', '500']
  }
}
