export interface PokemonName {
  'zh-Hans': string
  ja: string
  en: string
  it: string
  es: string
  de: string
  fr: string
  'zh-Hant': string
  ko: string
  roomaji: string
  'ja-Hrkt': string
}

export interface Pokemon {
  id: number
  height: number
  weight: number
  image: string
  types: string[]
  moves: string[]
  names: PokemonName
}

export interface TypeTranslation {
  ja: string
  ko: string
  fr: string
  de: string
  es: string
  it: string
  en: string
}

export interface PokemonType {
  backgroundColor: string
  translations: TypeTranslation
}

export interface TypesData {
  [key: string]: PokemonType
}
