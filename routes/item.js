import { Router } from 'express'
import { fetchFindById, fetchItemsByQuery } from '../service/item.js'
import { defaultAutor } from '../middleware/defaultAutor.js'
const router = Router();

const getItemById = async (req, res, next) => {
  const id = req.params.id;
  const data = await fetchFindById(id)
  res.json({ author: res.author, item: data })
}

const getItemsByQuery = async (req, res, next) => {
  const query = req.query.q
  if (query) {
    const data = await fetchItemsByQuery(query)
    res.json({ author: res.author, ...data })
  } else {
    res.json({ author: null, items: [] })
  }
}

router.use('/:id', defaultAutor, getItemById)
router.use('/', defaultAutor, getItemsByQuery)

export default router;