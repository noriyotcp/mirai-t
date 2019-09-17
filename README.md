# mirai-t

CLI tool for [Mirai Translate](https://miraitranslate.com/en/trial/) (trial), which provides a customizable translation solution.

## Installation

Use the package manager [yarn](https://yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com).

```bash
$ yarn add mirai-t
$ npm install mirai-t
```

## Usage

### Single line mode

```sh
$ mirai-t -s English -t Japanese This is the test.
これがテストです。
```

You can also use [ISO 639-1](http://www.loc.gov/standards/iso639-2/php/English_list.php).

```sh
$ mirai-t -s en -t jp This is the test.
これがテストです。
```

### Multiple lines mode (Interactive mode)

```sh
$ mirai-t -i
```

This mode is provided by [`inquirer.js`](https://github.com/SBoudrias/Inquirer.js). You can input the multiple lines with the [editor](https://github.com/SBoudrias/Inquirer.js#editor---type-editor).

## Disclamer

This tool scrapes [this page](https://miraitranslate.com/trial/) (Currently, the Japanese version of the page is targeted.) directly to get the data.
When using this tool, be careful not to overload the website with excessive access.

I am not responsible for compensating users for any damages they incur from using this tool or for any problems that arise between users using this tool.

Please check the [Terms of Use](https://miraitranslate.com/en/trial/pdf/kiyaku.pdf)
(Even though the URL contains `en`, the pdf is written in Japanese. 🤔)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
