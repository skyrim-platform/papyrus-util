## `@skyrim-platform/papyrus-util`

(Unofficial) TypeScript library for the PapyrusUtil Skyrim modding utility

- PapyrusUtil on Nexus: https://www.nexusmods.com/skyrimspecialedition/mods/13048
- PapyrusUtil maintainer: [exiledviper](https://www.nexusmods.com/skyrimspecialedition/users/85199)
- PapyrusUtil original author: [meh321](https://www.nexusmods.com/skyrim/users/2964753)

## Getting Started

You can find an example Skyrim Platform plugin with documentation on how to get started using this library: https://github.com/skyrim-platform/example-plugin-using-libraries

> Papyrus source code conversion to TypeScript originally generated using [Papyrus-2-Typescript](https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript)

## Example

```ts
import { once, printConsole } from '@skyrim-platform/skyrim-platform'
import { FoldersInFolder } from '@skyrim-platform/papyrus-util/MiscUtil'

// When the game loads, show a listing of all of the directory names inside of the Data folder
once('update', () => {
    const foldersInData = FoldersInFolder('.')
    if (foldersInData)
        Debug.messageBox(`Folders in Data directory: ${foldersInData.join("\n")}`)
})
```
