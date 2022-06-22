import axios from 'axios';

export default class PostSevise {
   static async getAll(limit = 8, page = 1) {
      const response = await axios.get('http://localhost:3001/goods', {
         params: {
            _limit: limit,
            _page: page
         }
      })
      return response;
   }

   static async getSearch() {
      const response = await axios.get('http://localhost:3001/goods')
      return response;
   }

   static async getDetective(limit = 8, page = 1) {
      const response = await axios.get('http://localhost:3001/goods?category=detective', {
         params: {
            _limit: limit,
            _page: page
         }
      })
      return response;
   }

   static async getSkazki(limit = 8, page = 1) {
      const response = await axios.get('http://localhost:3001/goods?category=skazki', {
         params: {
            _limit: limit,
            _page: page
         }
      })
      return response;
   }

}