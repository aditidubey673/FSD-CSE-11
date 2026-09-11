import Items from './Items'
import "./Items.css"
const ItemStore = () => {
  const itemData = [
    {title:"Novel", Price:"300", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10DHgDRXzJhvNFPOL5oeSSfmHDfWF1s_i7tTDLaRRDQ&s=10"},
    {title:"Heels", Price:"300", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5P9pJNsGN6TPJCo4neqdf64pdGWBckn5LBV9hTkLLcQ&s=10"},
    {title:"Headphones", Price:"300", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWa4b0RYbQv6KXHhn5PsoG7Z3ruhjA0FPlHlfqGveN_lOU8V05nRp6hjc&s=10"},
    {title:"Kettle", Price:"300", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibRZr4pC7NEI5j0TZArf-AuHzHATace5P64iNh13MsS-UvsOritrQYk0&s=10"},
    {title:"Clothes", Price:"300", image:"https://www.aniclothing.in/cdn/shop/files/ANILB13-03-2647374.jpg?v=1781850470&width=1080"},
  ]
  return(
      <div className='itemss'>
          {itemData.map((book,i)=> {
            return <Items key={i} props={book} />;
        })}
      </div>
  )
}
export default ItemStore;