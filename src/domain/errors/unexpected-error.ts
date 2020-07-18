export class UnexpectedError extends Error {
  constructor () {
    super('Sucedio algo')
    this.name = 'UnexpectedError'
  }
}
