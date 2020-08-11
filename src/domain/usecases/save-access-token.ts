export interface SaveAccessToken {
  Save: (accessToken: string) => Promise<void>
}
