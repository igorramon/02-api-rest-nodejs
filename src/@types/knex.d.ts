// eslint-disable-next-line
import {knex} from '../database'

declare module 'knex/types/table' {
  export interface Tables {
    id: string
    title: string
    amount: number
    created_at: string
    session_id?: string
  }
}
