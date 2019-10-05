<a name="v0.1.3"></a>

## [v0.1.3](https://github.com/noriyotcp/mirai-t/compare/v0.1.2...v0.1.3) (2019-10-05)

### Add

- Add .github/workflows
- Add status badge
- Add .github/workflows

### Bump

- Bump [@types](https://github.com/types)/puppeteer from 1.19.1 to 1.20.1
- Bump [@types](https://github.com/types)/node from 12.7.5 to 12.7.11
- Bump commander from 3.0.1 to 3.0.2

### Improve

- Improve scripts and paths in tscofig.json

### Misc

- Disable "declaration": true in tsconfig.json
- Run tsc --build --clean and --force on prepublishOnly

### Pull Requests

- Merge pull request [#11](https://github.com/noriyotcp/mirai-t/issues/11) from noriyotcp/improve-config
- Merge pull request [#7](https://github.com/noriyotcp/mirai-t/issues/7) from noriyotcp/dependabot/npm_and_yarn/types/puppeteer-1.20.1
- Merge pull request [#6](https://github.com/noriyotcp/mirai-t/issues/6) from noriyotcp/dependabot/npm_and_yarn/types/node-12.7.11
- Merge pull request [#3](https://github.com/noriyotcp/mirai-t/issues/3) from noriyotcp/dependabot/npm_and_yarn/commander-3.0.2
- Merge pull request [#10](https://github.com/noriyotcp/mirai-t/issues/10) from noriyotcp/noriyotcp-patch-1
- Merge pull request [#9](https://github.com/noriyotcp/mirai-t/issues/9) from noriyotcp/revert-8-noriyotcp-patch-1
- Merge pull request [#8](https://github.com/noriyotcp/mirai-t/issues/8) from noriyotcp/noriyotcp-patch-1

<a name="v0.1.2"></a>

## [v0.1.2](https://github.com/noriyotcp/mirai-t/compare/v0.1.1...v0.1.2) (2019-09-18)

### Add

- Add homepage and bugs url fields to package.json

<a name="v0.1.1"></a>

## [v0.1.1](https://github.com/noriyotcp/mirai-t/compare/v0.1.0...v0.1.1) (2019-09-18)

### Fix

- Fix README and add some keywords

### Update

- Update settings

### Upgrade

- Upgrade PATCH version

<a name="v0.1.0"></a>

## [v0.1.0](https://github.com/noriyotcp/mirai-t/compare/c2e3acf...v0.1.0) (2019-09-18)

### Add

- Add crawler mock
- Add crawler
- Add test against translate
- Add a practice swing to foo.test.ts
- Add a few type to src/index.ts
- Add LANGUAGES and validations on CLI mode
- Add translate.ts (just returns a mock)

### Install

- Install puppeteer
- Install Jest
- Install inquirer and [@types](https://github.com/types)/inquirer
- Install commander

### Update

- Update README

### Misc

- Byebye webpack
- Call help() when no arguments provided
- Enable to execute `mirai-t`
- Error if Source or Target is missed (Single Line mode)
- Implement interactive mode via -i option
- Just join an array of strings
- List LANGUAGES in interactive mode
- Rename package name
- Use QuestionCollection type from inquirer
- Use commander (still a practice swing)
- VS Code: Format on save
