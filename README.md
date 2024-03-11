# LXC ID Mapper

[![npm version][npm-version-src]][npm-version-href]
[![License][license-src]][license-href]

LXC ID Mapper is a library designed to map container GIDs to host UIDs for LXC containers. This library provides a simple and efficient way to manage user and group IDs in a containerized environment, ensuring that the correct permissions are applied and that the security of the host system is maintained.

<details>
  <summary><b>Table of Contents</b></summary>

* [Usage](#-usage)
    * [Playground](#playground)
    * [Basic](#basic)
* [Installation](#-installation)
* [Credits](#-credits)
    * [Contributors](#contributors)
* [License](#-license)
</details>

## 🧪 Usage

### Playground

Try the library online using the provided playground - **[visit playground](https://hywax.space/projects/lxc-id-mapper)**.

### Basic
```typescript
import { mapper } from 'lxc-id-mapper'

const result = mapper([
  { containerId: 1000, hostId: 1005 }
])

console.log(result.idMap) // Outputs the mapped IDs
```

## 🚀 Installation

```bash
# Using pnpm
pnpm add lxc-idmapper -D

# Using yarn
yarn add lxc-idmapper -D

# Using npm
npm install lxc-idmapper -D
```

## 🏆 Credits

A huge thank you to everyone who is helping to improve Mafl. Thanks to you, the project can evolve!

### Contributors

To become a contributor, please follow our [contributing guide](CONTRIBUTING.md).

![Contributors](https://raw.githubusercontent.com/hywax/lxc-idmapper/main/.github/static/contributors.svg)

## 📄 License

This template was created under the [MIT License](LICENSE).

[npm-version-src]: https://img.shields.io/npm/v/lxc-idmapper/latest.svg?logo=hackthebox&color=E56F01&logoColor=fff
[npm-version-href]: https://npmjs.com/package/lxc-idmapper
[license-src]: https://img.shields.io/badge/License-MIT-E56F01?logo=opensourceinitiative&logoColor=fff
[license-href]: https://npmjs.com/package/lxc-idmapper
