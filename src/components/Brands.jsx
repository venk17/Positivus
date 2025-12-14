import amazon from "../assets/brands/amazon.png";
import dribbble from "../assets/brands/dribbble.png";
import hubspot from "../assets/brands/hubspot.png";
import notion from "../assets/brands/notion.png";
import netflix from "../assets/brands/netflix.png";
import zoom from "../assets/brands/zoom.png";

const brands = [amazon, dribbble, hubspot, notion, netflix, zoom];

export default function Brands() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-12">
      {brands.map((brand, index) => (
        <img
          key={index}
          src={brand}
          alt="brand"
          className="
            h-12 md:h-14 lg:h-16
            object-contain
            grayscale opacity-60
            hover:grayscale-0 hover:opacity-100
            transition-all duration-300 ease-in-out
          "
        />
      ))}
    </div>
  );
}
