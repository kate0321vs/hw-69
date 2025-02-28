export interface Show {
  name: string,
  image: { original: string },
  summary: string,
  premiered: string,
  status: string,
  id?: string,
  language?: string,
}

export interface ShowApi {
  show: Show;
}