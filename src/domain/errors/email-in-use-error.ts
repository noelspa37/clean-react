export class EmailInUseError extends Error {
  constructor () {
    super('Ese email ya está registrado')
    this.name = 'EmailInUseError'
  }
}
