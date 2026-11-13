import type { InjectionKey, Ref } from 'vue'

export interface MenuCollapseContext {
  isCollapse: Ref<boolean>
  toggleCollapse: () => void
}

export const menuCollapseKey: InjectionKey<MenuCollapseContext> = Symbol('menuCollapse')
