import { DefineLocaleMessage } from "vue-i18n"
import type schema from "./lang/en.json"

type MessageSchema = typeof schema

declare module "vue-i18n" {
  export interface DefineLocaleMessage extends MessageSchema {}
}
