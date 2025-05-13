import fs from 'node:fs/promises'
import pluginTs from '@typescript-eslint/eslint-plugin'
import { pluginsToRulesDTS } from 'eslint-typegen/core'

const dts = await pluginsToRulesDTS({
  '@typescript-eslint': pluginTs,
})

await fs.writeFile('eslint-typegen.d.ts', dts)