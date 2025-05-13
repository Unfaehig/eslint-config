// @ts-check
/// <reference path="./eslint-typegen.d.ts" />
import stylistic from '@stylistic/eslint-plugin'
import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

export default [
	{
		/* plugins: {
			'@stylistic': stylistic,
			'@typescript-eslint': ts
		}, */

		languageOptions: {
			parser: parser
			/* parserOptions: {
			  projectService: true,
			  tsconfigRootDir: import.meta.dirname,
			  sourceType: 'module', // Allows for the use of imports
			}, */
		},
		rules: {
			// General Provisions
			'@stylistic/linebreak-style': [ 'error', 'unix' ],
			'@stylistic/no-trailing-spaces': [ 'error', { skipBlankLines: false } ],
			'@stylistic/indent': [ 'error', 'tab' ], // { SwitchCase: 1, ArrayExpression: 1 }
			// ToDo revalidate this rule
			'@stylistic/no-tabs': [ 'error', { allowIndentationTabs: true } ],
			// '@stylistic/no-trailing-spaces': 'error', // Already a defautl!

			// Naming
			'@typescript-eslint/naming-convention': [ 'error',
				{
					selector: [ 'variable', 'function', 'classProperty', 'classMethod' ],
					format: [ 'camelCase' ]
				},
				{
					selector: 'class',
					format: [ 'PascalCase' ]
				},
				{
					selector: [ 'classProperty', 'classMethod' ],
					modifiers: [ 'private' ],
					format: [ 'camelCase' ],
					leadingUnderscore: 'require'
				}
				// Can't force it do to complications with composables
				/* {
					selector: 'variable',
					modifiers: [ 'const' ],
					format: [ 'PascalCase', 'UPPER_CASE' ]
				} */
			],

			// -- Literals --

			// Objects
			'no-object-constructor': 'error',
			'@stylistic/object-curly-spacing': [ 'error', 'always' ],
			'@stylistic/quote-props': [ 'error', 'as-needed' ],
			// @stylistic/key-spacing: ["error", { "beforeColon": false }] // Already a defautl!
			'@stylistic/comma-spacing': [ 'error', { before: false, after: true } ],
			'@stylistic/object-curly-newline': [ 'error', { multiline: true, consistent: true } ],
			'@stylistic/object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],
			'@stylistic/comma-dangle': [ 'error', 'never' ],
			'@stylistic/comma-style': [ 2, 'last' ],

			// Arrays
			'no-array-constructor': 'error',
			'@stylistic/array-bracket-spacing': [ 'error', 'always', { singleValue: true, arraysInArrays: false } ],

			// Strings
			// '@stylistic/quotes': [ 'error', 'single' ], // Already a defautl!

			// Semicolons
			'@stylistic/semi': [ 'error', 'never' ], // default always
			'@stylistic/semi-spacing': [ 'error', { before: false, after: true } ],

			// -- Blocks --
			'@stylistic/block-spacing': [ 'error', 'always' ],
			'@stylistic/padded-blocks': [ 'error', 'always' ],

			// -- Conditional instructions --
			// IF
			'@stylistic/space-before-blocks': [ 'error', {
				functions: 'always',
				keywords: 'always',
				classes: 'always'
			} ],
			'@stylistic/space-in-parens': [ 'error', 'always' ],
			curly: [ 'error', 'multi-line' ],
			'@stylistic/brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
			'@stylistic/new-parens': [ 'error' ],
			// ToDo: Think about after false
			'@stylistic/keyword-spacing': [ 'error', {
				before: true,
				after: true
			} ],

			// Switch
			'@stylistic/padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: [ 'case', 'function' ], next: '*' },
				{ blankLine: 'always', prev: '*', next: [ 'case', 'function' ] },
				// Force variable definitions to be one block!
				{ blankLine: 'always', prev: '*', next: [ 'var', 'let', 'const' ] }, // Blank line before
				{ blankLine: 'always', prev: [ 'var', 'let', 'const' ], next: '*' }, // Blank line after
				// No lines between var, let or const blocks
				{ blankLine: 'never', prev: [ 'var' ], next: [ 'var' ] },
				{ blankLine: 'never', prev: [ 'let' ], next: [ 'let' ] },
				{ blankLine: 'never', prev: [ 'const' ], next: [ 'const' ] }
			],
			'@stylistic/computed-property-spacing': [ 'error', 'always' ],

			// Functions
			'@stylistic/no-whitespace-before-property': [ 'error' ],
			'@stylistic/space-before-function-paren': [ 'error', {
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'ignore'
			} ],
			'@stylistic/func-call-spacing': [ 'error', 'never' ],

			// Operations
			'@stylistic/space-infix-ops': [ 'error' ],
			'@stylistic/space-unary-ops': [ 'error', {
				words: true,
				nonwords: false, // default true
				overrides: {}
			} ],
			eqeqeq: [ 'error', 'always' ],
			'@stylistic/no-multi-spaces': 2, // Don't care if there's more than one space anywhere.
			'@stylistic/no-multiple-empty-lines': 'off',
			'@stylistic/eol-last': [ 'error', 'always' ],
			'no-undef': 1,
			'no-unused-vars': 1,

			// -- TS --
			'@stylistic/member-delimiter-style': [ 'error', {
				multiline: {
					delimiter: 'comma',
					requireLast: false
				},
				singleline: {
					delimiter: 'comma',
					requireLast: false
				},
				multilineDetection: 'brackets'
			} ]
		}
	}
]
