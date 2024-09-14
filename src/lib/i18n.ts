// src/lib/i18n.ts
import { Navigation, Middleware, PrefixStrategy } from "@inlang/paraglide-next"
import type { AvailableLanguageTag } from "@/paraglide/runtime"
// import * as m from "@/paraglide/messages"

export const strategy = PrefixStrategy<AvailableLanguageTag>()

export const middleware = Middleware({ strategy })
export const { Link, useRouter, usePathname, redirect, permanentRedirect } = Navigation({ strategy })
