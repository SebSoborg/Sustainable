
import '../styles/content.css' 
import baggrund from '../images/hero.png';
import linje from '../images/linje.png';

import treepc from '../images/heropc.png';
import anim1 from '../anim1.json';
import anim2 from '../designwhatworks.json';
import anim3 from '../anim3.json';
import Lottie from 'lottie-react';
import greenpeace from '../images/greenpeace.png';
import wwf from '../images/wwf.png';
import energy from '../images/energy.png';

function Content()  {
    return (
        <div className="content">
        <div className="boks">
       <img className='baggrund' src={baggrund} alt="tree"/>
       <div className="treepc"><img src={treepc} alt="tree"/>
  </div>
       <div className="tekst">We create your website <br />
  You help the planet <br /><br />
  <a href="#kontakt">Contact us</a>
  
  
  </div>
       </div>
     
       
       <div id="section1">
        <div className="container">
        <div className="venstre">
          
  <h1>For every website we create <br />
  50% of the cost goes back to the planet </h1>
  
  <img src={linje} alt="streg"/><br />
  <p>At Digital of Tomorrow, we are committed to building a better future for our planet and future generations. When you choose us to design and create your new website, you're not just investing in your online presence – you're also contributing to the planet. </p>
  <br />
  <h3>How do you help the planet?</h3>
  <p>
  50% of your money goes to creating your website and hosting it and the other 50% goes directly to non-profit organisations, that helps moving the world in the right direction. </p>
  <br />
  <h3>Yes you heard that right! </h3>
  <p>50% of your money goes back to the planet - and you choose what organzisation you want to support.
  </p>
  
  </div>
  <div className='højre'>
  <Lottie animationData={anim1} />
  </div>
  </div>
       </div>
       <div id="section2">
        <div className="container">
        <div className="venstre">
  <h1>Digital of tomorrow creates minimalistic and user friendly websites</h1>
  <img src={linje} alt="tree"/>
  <p>We specialize in minimalistic and user-friendly website design. We understand that in today's fast-paced digital world, less is often more. By adopting a minimalist design approach, we not only create visually appealing websites but also ensure an intuitive and good user experience.</p>
  <br />
  <h3>Minimalistic design = less data</h3>
  
  <p>We create websites that don’t take a lot of data and energy on the internet. This means we minimize unnecessary elements such as large images, complex animations, and excessive scripts, which not only contribute to faster loading times but also reduce the website's carbon footprint. </p>
  <br /> 
  <p>By prioritizing efficiency and simplicity in our design process, we aim to create websites that are not only aesthetically pleasing but also environmentally sustainable.</p>
  </div>
  <div className='højre'>
  <Lottie animationData={anim2} />
  </div>
  </div>
       </div>
       <div className="section3">
        <div className="container">
        <div className="venstre">
  <h1>Contribute to a brighter tomorrow </h1>
  <img src={linje} alt="tree"/>
  <p>A portion of every project cost goes directly to non-profit organizations that are dedicated to making the world a better place. From planting trees in the rainforest to investing in water solutions and clean energy initiatives, we partner with organizations that share our vision for a brighter tomorrow.</p>
  
  </div>
  <div className='højre'>
  <Lottie animationData={anim3} />
  </div>
  </div>
       </div>
       <div id="section4">
        <div className="container">
        <div className="venstre">
  <h1>What kind of website do you need?</h1>
  <img src={linje} alt="tree"/>
  <p>We are in the service buisiness and our biggest goal is to help you. It’s just a bonus that our hosting services are powered by renewable energy sources, ensuring your website contributes to a sustainable future.</p>
  </div>
  </div>
  </div>
  
  
  <div className='pakker'>
    <div className="pakke">
      <h2>Basic</h2>
      <h1>$995</h1>
      <p>50% to non-profit organization</p>
      <div>
      <h3>- Sustainable and user-friendly website design</h3>
      <h3>- Responsive design</h3>
      <h3>- Basic SEO optimization</h3>
      <h3>- Contact form integration</h3>
      <h3>- Support for 3 months</h3>
      </div>
      <button className='pakkeknap'>Contact us</button>
  
  </div>
    <div className="pakke">
      <h2>Standard</h2>
      <h1>$1495</h1>
      <p>50% to non-profit organization</p>
      <div>
      <h3>- Sustainable and user-friendly website design</h3>
      <h3>- Responsive design</h3>
      <h3>- Advanced SEO optimization</h3>
      <h3>- Contact form and more
  </h3>
      <h3>- Support for 6 months</h3>
      </div>
      <button className='pakkeknap'>Contact us</button>
  
  </div>
    <div className="pakke">
      <h2>Premium</h2>
      <h1>$2495</h1>
      <p>50% to non-profit organization</p>
      <div>
      <h3>- Sustainable and user-friendly website design</h3>
      <h3>- Responsive design</h3>
      <h3>- Expert SEO optimization</h3>
      <h3>- E-commerce functionality</h3>
      <h3>- Support for 12 months</h3>
      </div>
      <button className='pakkeknap'>Contact us</button>
    </div>
  </div>
  
  <div id="section5">
        <div className="container">
        <div className="venstre">
  <h1>Choose who you want to support</h1>
  <img src={linje} alt="tree"/>
  <p>We've partnered with leading non-profit organizations in various fields and you get to choose where 50% of your project cost goes. </p>
  </div>
  </div>
  </div>
  
  <div className='partners'>
  <div className="partner">
    <div className='venstre'>
      <h1>Greenpeace</h1>
      <h4>Advocating for environmental protection and sustainability worldwide.</h4>
      <p>Greenpeace is a global environmental organization that uses non-violent direct action and creative communication to expose environmental problems and promote solutions. They focus on issues such as climate change, deforestation, overfishing, and pollution, advocating for environmental protection and sustainability.</p>
      <a href="https://www.greenpeace.org/international/"><button className='pakkeknap'>Visit website</button></a>
    </div>
    <div className='højre'>
        <img src={greenpeace} alt="" />
      </div>
    </div>
    <br />
  <div className="partner">
    <div className='venstre'>
      <h1>World Wildlife Fund</h1>
      <h4>Protecting the diversity of life on Earth through conservation initiatives</h4>
      <p>WWF is one of the largest and most well-known conservation organizations globally, dedicated to protecting the diversity of life on Earth and preserving nature's beauty and ecological integrity. They work on various conservation initiatives, including protecting endangered species, preserving habitats, and combating climate change</p>
      <a href="https://www.worldwildlife.org/"><button className='pakkeknap'>Visit website</button></a>
    
    </div>
    <div className='højre'>
        <img src={wwf} alt="" />
      </div>
    </div>
    <br />
    <div className="partner">
    <div className='venstre'>
      <h1>Renewable Energy World</h1>
      <h4>Promoting renewable energy technologies and a sustainable energy future.</h4>
      <p>Renewable Energy World is a platform dedicated to promoting the adoption and advancement of renewable energy technologies worldwide. They provide news, analysis, and resources on renewable energy topics such as solar, wind, hydro, geothermal, and bioenergy, advocating for a transition to a sustainable energy future.</p>
      <a href="https://www.renewableenergyworld.com/#gref"><button className='pakkeknap'>Visit website</button></a>
    </div>
    <div className='højre'>
        <img src={energy} alt="" />
      </div>
    </div>
  </div>
  
  
  
  
  <div id='kontakt'>
   <h1>Contact us</h1>
   <h2>We build your digital presence <br />
  you help the world become a better tomorrow</h2>
  <div className='info'>
    <input type="text" id="name" name="name" placeholder='Name'/>
    <input type="text" id="email" name="email" placeholder='Email'/>
    </div>
    <input type="text" id="describe" name="describe" placeholder='Describe here what you need'/>
    <select id="nonprofit">
    <option value="1">Choose nonprofit organisation</option>
    <option value="2">WWF</option>
    <option value="3">Greenpeace</option>
    <option value="4">Renewable Energy World</option>
  </select>
  <select id="solution" placeholder="Choose solution">
    <option value="1">Choose solution</option>
    <option value="2">Basic</option>
    <option value="3">Standard</option>
    <option value="4">Premium</option>
  </select>
  <button onClick={() => alert("Message sent")}>
          Send message
     </button>
  </div>
      </div>    
    );
}
    
export default Content;
