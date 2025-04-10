import React from 'react'
import Slider from '../../shared/Slider';
import ScrollText from '../../shared/Slider/ScrollText';

import ShopifySection from '../../shared/ShopifySection';
import TopCategories from '../../shared/TopCategories';
import BestsellingBooks from '../../shared/BestsellingBooks';

import Banner from '../../shared/Banner';
import Collection from '../../shared/Collection';
import AdvancedContent from '../../shared/AdvancedContent';
import Subscribe from '../../shared/Subscribe';

const HomePage = () => {
  return (
    <div>
     <Slider />
     <ScrollText />
     <ShopifySection />
     <TopCategories />
     <BestsellingBooks />
   <Banner />
   <ShopifySection />
   <Collection />
   <AdvancedContent />
   <Subscribe />
    </div>
  )
}

export default HomePage