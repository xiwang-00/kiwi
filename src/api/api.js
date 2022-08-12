
const GetItems =  async() => {
    const resul = await fetch('https://fakestoreapi.com/products');
    const resul2 = await resul.json();
    return await resul2;     
}
const GetCategory = async(item) => {
    const resul = await fetch(`https://fakestoreapi.com/products/category${item}`);
    const resul2 = await resul.json();
    return await resul2; 
}
const GetRandom = async()=>{
    const resul = await fetch('https://fakestoreapi.com/products?sort=desc');
    const resul2 = await resul.json();
    return await resul2; 
}
const GetItem = async(item) => {
    const resul = await fetch(`https://fakestoreapi.com/products/${item}`)
    const resul2 = await resul.json();
    return await resul2; 
}
export {GetItems,GetItem,GetCategory,GetRandom};