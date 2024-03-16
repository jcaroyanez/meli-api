import axios from 'axios';
import { URL_DETAIL, URL_ITEMS } from '../definitions/contans.js';
import { mapperItemDetail, mapperItems } from '../util/util.js';

export const fetchItemsByQuery = async query => {
  try {
    const { data } = await axios.get(`${URL_ITEMS}${query}&limit=4`)
    return mapperItems(data);
  } catch (error) {
    return error
  }
}

export const fetchFindById = async id => {
  try {
    const [detailItem, description] = await Promise.all(
      [
        axios.get(`${URL_DETAIL}${id}`),
        axios.get(`${URL_DETAIL}${id}/description`)
      ]
    )
 
    return {
      ...mapperItemDetail(detailItem.data),
      description: description.data.plain_text
    }
  } catch (error) {
    return error
  }
}