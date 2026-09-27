import { BaseRouteKey, IRouteDefinition, PageRoutesKeys, SectionKeys } from "@/Interfaces/Routes"

type SystemRoutesMap = {
  [key in SectionKeys]: Record<string, IRouteDefinition>
}

export const SYSTEM_ROUTES: SystemRoutesMap = {

  [SectionKeys.HOME]: {
    [PageRoutesKeys.HOME]: {
      [BaseRouteKey.PATH]: PageRoutesKeys.HOME,
      [BaseRouteKey.TITLE]: "Início",
      [BaseRouteKey.ICON]: "pi pi-home",
      [BaseRouteKey.HIDDEN]: true,
    },
  },
}