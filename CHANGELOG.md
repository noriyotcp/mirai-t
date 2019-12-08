<a name="v0.2.1"></a>

## [v0.2.1](https://github.com/noriyotcp/mirai-t/compare/v0.2.0...v0.2.1) (2019-12-08)

### Bump

- Bump typescript from 3.7.2 to 3.7.3
- Bump [@types](https://github.com/types)/puppeteer from 1.20.2 to 2.0.0
- Bump [@types](https://github.com/types)/node from 12.12.7 to 12.12.14
- Bump ts-jest from 24.1.0 to 24.2.0
- Bump [@types](https://github.com/types)/jest from 24.0.22 to 24.0.23
- Bump commander from 4.0.0 to 4.0.1
- Bump prettier from 1.18.2 to 1.19.1
- Bump [@types](https://github.com/types)/node from 12.12.6 to 12.12.7
- Bump puppeteer from 1.20.0 to 2.0.0
- Bump [@types](https://github.com/types)/jest from 24.0.19 to 24.0.22
- Bump [@types](https://github.com/types)/node from 12.11.6 to 12.12.6
- Bump tslint from 5.20.0 to 5.20.1
- Bump typescript from 3.6.4 to 3.7.2
- Bump commander from 3.0.2 to 4.0.0
- Bump [@types](https://github.com/types)/node from 12.7.11 to 12.11.6
- Bump [@types](https://github.com/types)/jest from 24.0.18 to 24.0.19
- Bump [@types](https://github.com/types)/puppeteer from 1.20.1 to 1.20.2
- Bump typescript from 3.6.3 to 3.6.4

### Omit

- Omit Node.js 8.x and 10.x for GitHub Actions

### Use

- Use interface IResponse for response.json()

### Pull Requests

- Merge pull request [#45](https://github.com/noriyotcp/mirai-t/issues/45) from noriyotcp/dependabot/npm_and_yarn/types/puppeteer-2.0.0
- Merge pull request [#46](https://github.com/noriyotcp/mirai-t/issues/46) from noriyotcp/dependabot/npm_and_yarn/typescript-3.7.3
- Merge pull request [#40](https://github.com/noriyotcp/mirai-t/issues/40) from noriyotcp/dependabot/npm_and_yarn/types/puppeteer-2.0.0
- Merge pull request [#41](https://github.com/noriyotcp/mirai-t/issues/41) from noriyotcp/dependabot/npm_and_yarn/ts-jest-24.2.0
- Merge pull request [#43](https://github.com/noriyotcp/mirai-t/issues/43) from noriyotcp/dependabot/npm_and_yarn/types/node-12.12.14
- Merge pull request [#36](https://github.com/noriyotcp/mirai-t/issues/36) from noriyotcp/dependabot/npm_and_yarn/types/jest-24.0.23
- Merge pull request [#35](https://github.com/noriyotcp/mirai-t/issues/35) from noriyotcp/dependabot/npm_and_yarn/commander-4.0.1
- Merge pull request [#34](https://github.com/noriyotcp/mirai-t/issues/34) from noriyotcp/dependabot/npm_and_yarn/prettier-1.19.1
- Merge pull request [#33](https://github.com/noriyotcp/mirai-t/issues/33) from noriyotcp/dependabot/npm_and_yarn/types/node-12.12.7
- Merge pull request [#22](https://github.com/noriyotcp/mirai-t/issues/22) from noriyotcp/dependabot/npm_and_yarn/puppeteer-2.0.0
- Merge pull request [#27](https://github.com/noriyotcp/mirai-t/issues/27) from noriyotcp/dependabot/npm_and_yarn/commander-4.0.0
- Merge pull request [#32](https://github.com/noriyotcp/mirai-t/issues/32) from noriyotcp/dependabot/npm_and_yarn/types/jest-24.0.22
- Merge pull request [#31](https://github.com/noriyotcp/mirai-t/issues/31) from noriyotcp/dependabot/npm_and_yarn/types/node-12.12.6
- Merge pull request [#30](https://github.com/noriyotcp/mirai-t/issues/30) from noriyotcp/dependabot/npm_and_yarn/tslint-5.20.1
- Merge pull request [#29](https://github.com/noriyotcp/mirai-t/issues/29) from noriyotcp/dependabot/npm_and_yarn/typescript-3.7.2
- Merge pull request [#20](https://github.com/noriyotcp/mirai-t/issues/20) from noriyotcp/dependabot/npm_and_yarn/types/node-12.11.6
- Merge pull request [#16](https://github.com/noriyotcp/mirai-t/issues/16) from noriyotcp/dependabot/npm_and_yarn/types/jest-24.0.19
- Merge pull request [#15](https://github.com/noriyotcp/mirai-t/issues/15) from noriyotcp/dependabot/npm_and_yarn/types/puppeteer-1.20.2
- Merge pull request [#14](https://github.com/noriyotcp/mirai-t/issues/14) from noriyotcp/dependabot/npm_and_yarn/typescript-3.6.4

<a name="v0.2.0"></a>

## [v0.2.0](https://github.com/noriyotcp/mirai-t/compare/v0.1.3...v0.2.0) (2019-10-08)

### Add

- Add test against crawler
- Add CHANGELOG.md
- Add setupQuestions() to interactive.ts
  - It just returns questions for the prompt

### Misc

- Enable to let headless mode be false
- Remove an extra initialization of Crawler
- Update README.md

### Pull Requests

- Merge pull request [#12](https://github.com/noriyotcp/mirai-t/issues/12) from noriyotcp/switching-headless-mode

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
