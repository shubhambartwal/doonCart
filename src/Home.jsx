import React from 'react';
import './Home.css';
import Product from "./Product";
import F1 from './pictures/f1.jfif';
import F2 from './pictures/mango.jpg';
import F3 from './pictures/f3.jfif';
import F4 from './pictures/f4.jfif';
import F5 from './pictures/f5.jfif';
import F6 from './pictures/f6.jfif';
function Home() {
    return (
        <div className= "home">
        <img className="home__img" 
        src ="https://images.all-free-download.com/images/graphicthumb/mango_209220.jpg" alt=" "/>
 <div className="home__row">
 <Product
id= "1"
title ="Strawberry"
price={250}

img ={F1}

/>
<Product
id= "2"
title ="Mango"
price={ 50}

img ={F2}

/>
</div>
<div className="home__row">
<Product
id= "3"
title ="Orange"
price= {60}

img ={F3}

/>
<Product
id= "4"
title ="Apple"
price= {100}

img ={F4}

/>
<Product
id= "5"
title ="Grapse"
img = {F5}
price= {80}


/>
</div>
<div className="home__row">
<Product
id= "6"
title ="Papaya"
price= {120}
img ={F6}

/>
</div>

        </div>
        
    );
}

export default Home;
