export const getRoute = (path: string, value: string | number): string => {
  return path.replace(/:[a-zA-Z0-9_]+/g, String(value))
}

export enum BaseRouteKey {
  PATH = "path",
  ROLE = "role",
  ICON = "icon",
  TITLE = "title",
  HIDDEN = "hidden",
}

export interface IRouteDefinition {
  [BaseRouteKey.PATH]: string
  [BaseRouteKey.ICON]?: string
  [BaseRouteKey.TITLE]: string
  [BaseRouteKey.HIDDEN]?: boolean
}

export enum SectionKeys {
  HOME = "home",
}

export enum ParamsRoutesKeys {
  REGISTRATION = "matricula",
  ID = "id",
}

export enum PageRoutesKeys {
  HOME = "/",
}