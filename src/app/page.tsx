import FeaturedProducts from './_Components/Home/FeaturedProducts/FeaturedProducts';
import ShopByCategory from './_Components/Home/ShopByCategory/ShopByCategory';
import SliderComponent from './_Components/SliderComponent/SliderComponent';

export default function home() {

  return (
<>
  <SliderComponent />
  <ShopByCategory />
  <FeaturedProducts />
</>
  );
}