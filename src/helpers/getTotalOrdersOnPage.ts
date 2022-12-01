type QuerySelector = HTMLTableSectionElement | null;

export const getTotalOrdersOnPage = (): number => {
  const orderHeight: number = 65;
  const spaceFromTopToTableHead: number = 10;

  const fullHeight: number = window.innerHeight;
  const tableHead: QuerySelector = document.querySelector('thead');
  const pagination: QuerySelector = document.querySelector('#pagination');

  const heightFromTop: number | null = tableHead !== null 
    ? tableHead.clientHeight + spaceFromTopToTableHead 
    : null;

  const heightFromDown: number | null = pagination !== null
    ? pagination.clientHeight + 10 
    : null;
    
  return heightFromTop !== null
    && heightFromDown !== null
    && orderHeight !== null
    ? Math.floor((fullHeight - heightFromTop - heightFromDown) / orderHeight)
    : 0;
};
