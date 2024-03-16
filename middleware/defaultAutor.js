export const defaultAutor = (_, res, next) => {
  res.author = {
    name: 'jose',
    lastname: 'caro'
  }
  next()
}