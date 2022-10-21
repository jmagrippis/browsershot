import {writable} from 'svelte/store'

import type {Theme} from 'src/lib/types'

export const theme = writable<Theme>('auto')
