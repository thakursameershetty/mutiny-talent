// Brand logos
import vatika from '@/assets/brands/vatika.png';
import cocaCola from '@/assets/brands/coca-cola.png';
import pilgrim from '@/assets/brands/pilgrim.png';
import haier from '@/assets/brands/haier.png';
import duolingo from '@/assets/brands/duolingo.png';
import tataTea from '@/assets/brands/tata-tea.png';
import idfcFirstBank from '@/assets/brands/idfc-first-bank.png';
import mansionHouse from '@/assets/brands/mansion-house.png';
import aashirvaad from '@/assets/brands/aashirvaad.png';
import urbanCompany from '@/assets/brands/urban-company.png';
import swiggy from '@/assets/brands/Swiggy_Instamart_Launches_10-Minute_Delivery_of_Top-Selling_Smartphones_Across_Major_Cities-removebg-preview.png';
import oppo from '@/assets/brands/Oppo_Vector_Logo-removebg-preview.png';
import thumsUp from '@/assets/brands/Thums_Up_Logo_PNG_Vector__AI___CDR___PDF___SVG__Free_Download-removebg-preview.png';
import zomato from '@/assets/brands/district-by-zomato-app-3d-icon-on-transparent-background-free-png-removebg-preview.png';
import onePlus from '@/assets/brands/ONE_PLUS-removebg-preview.png';

const brands = [
  { name: 'Coca-Cola', logo: cocaCola },
  { name: 'Tata Tea', logo: tataTea },
  { name: 'Haier', logo: haier },
  { name: 'Duolingo', logo: duolingo },
  { name: 'Urban Company', logo: urbanCompany },
  { name: 'Pilgrim', logo: pilgrim },
  { name: 'Vatika', logo: vatika },
  { name: 'IDFC First Bank', logo: idfcFirstBank },
  { name: 'Mansion House', logo: mansionHouse },
  { name: 'Aashirvaad', logo: aashirvaad },
  { name: 'Swiggy Instamart', logo: swiggy },
  { name: 'Oppo', logo: oppo },
  { name: 'Thums Up', logo: thumsUp },
  { name: 'Zomato', logo: zomato },
  { name: 'OnePlus', logo: onePlus },
];

export const BrandsMarquee = () => {
  return (
    <section className="py-10 md:py-16 bg-background border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-6 md:mb-8">
        <p className="text-center text-xs sm:text-sm text-muted-foreground uppercase tracking-widest">
          Trusted by brands that get culture
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee */}
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 sm:px-10 md:px-12 py-3 sm:py-4 flex items-center justify-center"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
