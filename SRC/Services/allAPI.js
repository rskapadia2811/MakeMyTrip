export const search_airports = (search = 'surat', limit = '') => {
  let url =
    'https://voyager.goibibo.com/api/v2/flights_search/find_node_by_name_v2/?v=2';
  search ? (url += '&search_query=' + search) : (url += '&search_query=surat');
  limit ? (url += '&limit=' + limit) : null;
  return url;
};
