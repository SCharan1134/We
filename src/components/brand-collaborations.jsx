import "../css/brand-collaborations.css";
import PropTypes from "prop-types";
import {
  logo_1V,
  logo_2V,
  logo_3V,
  logo_4V,
  logo_5V,
  logo_6V,
  logo_7V,
  logo_8V,
} from "../utils";

const defaultBrands = [
  {
    id: "1",
    name: "Grado",
    logo: logo_1V,
    alt: "Grado Logo",
  },
  {
    id: "2",
    name: "Nataka",
    logo: logo_2V,
    alt: "Nataka Logo",
  },
  {
    id: "3",
    name: "Medvarsity",
    logo: logo_3V,
    alt: "Medvarsity Logo",
  },
  {
    id: "4",
    name: "Telugu Brand",
    logo: logo_4V,
    alt: "Telugu Brand Logo",
  },
  {
    id: "5",
    name: "KFinTec",
    logo: logo_5V,
    alt: "KFinTec Logo",
  },
  {
    id: "6",
    name: "Tech Corp",
    logo: logo_6V,
    alt: "Tech Corp Logo",
  },
  {
    id: "7",
    name: "Innovation Labs",
    logo: logo_7V,
    alt: "Innovation Labs Logo",
  },
  {
    id: "8",
    name: "Digital Solutions",
    logo: logo_8V,
    alt: "Digital Solutions Logo",
  },
];

const BrandCollaborations = ({ brands = defaultBrands }) => {
  // Duplicate the brands array to create seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-5xl font-medium text-gray-800 text-left mb-8 px-12 font-sans">
        Brand Collaborations
      </h2>
      <div className="w-full overflow-hidden relative brand-collaborations__container">
        <div className="flex items-center gap-8 brand-collaborations__track">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center  bg-white rounded-2xl   min-w-[200px] h-[140px] "
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain "
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BrandCollaborations.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
};

export default BrandCollaborations;
