export const API_URL=`http://localhost:4000`
export const API_URL_SQL = `https://apipurwastore.herokuapp.com`
// export const HOME_URL=`https://purwastore.web.app`
export const HOME_URL=`http://localhost:3001`

export const priceFormatter = (num) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num);
};

export const dateformat=(n)=>{
    var today = new Date(n);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
  
    today =dd + '-' + mm + '-' + yyyy;
    return today
}
