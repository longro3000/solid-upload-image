export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export interface LogInAction {
  type: typeof LOG_IN,
  payload: string
}

export interface LogOutAction {
  type: typeof LOG_OUT
}

export type Actions = LogInAction | LogOutAction
