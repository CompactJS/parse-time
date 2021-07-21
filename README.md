<h1 align="center">@compactjs/parse-time</h1>
<h3 align="center">Tiny hour parser & stringifier</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/@compactjs/parse-time" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@compactjs/parse-time.svg">
  </a>
  <a href="https://github.com/CompactJS/parse-time/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CompactJS/parse-time" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/CompactJS/parse-time#readme">Homepage</a>
  ·
  <a href="https://github.com/CompactJS/parse-time/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## Install

### NPM:

```sh
npm install @compactjs/parse-time
```

### CDN:

```html
<script src="https://unpkg.com/@compactjs/parse-time/dist/index.umd.js"></script>
```

## Usage

### As module:

```javascript
import { parse, stringify } from '@compactjs/parse-time';
```

### Example:

```javascript
// parse a time string to a number
parse('13:30'); // => 13.5
parse('13:19:48'); // => 13.33

// stringify a number to a time string
stringify(13.33); // => 13:19:48

// formating options:
stringify(13.33, 'hh'); // => 13
stringify(13.33, 'hh:mm'); // => 13:19
stringify(13.33, 'hh:mm:ss'); // => 13:19:48

// it accepts numbers higher than 24
stringify(34.5); // => 34:30:00

// to limit to a range between 0 and 24 (or 0-12),
// I recommend to use https://github.com/CompactJS/limit
stringify(limit(34.5, 24)); // => 10:30:00
```

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel <timo@bechtel.solutions>**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](<%= issuesUrl %>)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/CompactJS/parse-time/blob/main/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
