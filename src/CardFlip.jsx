import React, { useEffect } from 'react';
import './CardFlip.css';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dinart from './photos/psg-Dinart.jpg';
import Accambray from './photos/psg-Accambray.jpg';
import Mikkel from './photos/psg-Mikkel.jpg';
import Narcisse from './photos/psg-Narcisse.jpg';
import Nikola from './photos/psg-Nikola.jpg';
import Sagosen from './photos/psg-Sagosen.jpg';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const CardFlip = () => {
  useEffect(() => {
    const items = gsap.utils.toArray(".item");
    const details = document.querySelector('.detail');
    const detailContent = document.querySelector('.content');
    const detailImage = document.querySelector('.detail img');
    const detailTitle = document.querySelector('.detail .title');
    const detailSecondary = document.querySelector('.detail .secondary');
    const detailDescription = document.querySelector('.detail .description');

    let activeItem; // keeps track of which item is open (details)

    gsap.set(detailContent, { yPercent: -100 }); // close the details "drawer" (content) initially

    function showDetails(item) {
      if (activeItem) { // someone could click on an element behind the open details panel in which case we should just close it.
        return hideDetails();
      }
      const onLoad = () => {
        // position the details on top of the item (scaled down)
        Flip.fit(details, item, { scale: true, fitChild: detailImage });

        // record the state
        const state = Flip.getState(details);

        // set the final state
        gsap.set(details, { clearProps: true }); // wipe out all inline stuff so it's in the native state (not scaled)
        gsap.set(details, { xPercent: -50, top: "50%", yPercent: -50, visibility: "visible", overflow: "hidden" });

        Flip.from(state, {
          duration: 0.5,
          ease: "power2.inOut",
          scale: true,
          onComplete: () => gsap.set(details, { overflow: "auto" }) // to permit scrolling if necessary
        })
        // Flip.from() returns a timeline, so add a tween to reveal the detail content. That way, if the flip gets interrupted and forced to completion & killed, this does too.
        .to(detailContent, { yPercent: 0 }, 0.2);

        detailImage.removeEventListener("load", onLoad);
        document.addEventListener('click', hideDetails);
      };

      // Change image and text
      const data = item.dataset;
      detailImage.addEventListener("load", onLoad);
      detailImage.src = item.querySelector('img').src;
      detailTitle.innerText = data.title;
      detailSecondary.innerText = data.secondary;
      detailDescription.innerText = data.text;

      
      gsap.to(items, { opacity: 1, stagger: { amount: 0.7, from: items.indexOf(item), grid: "auto" } }).kill(item);
      gsap.to(item, { opacity: 0.5 });
      activeItem = item;
    }

    function hideDetails() {
      document.removeEventListener('click', hideDetails);
      gsap.set(details, { overflow: "hidden" });
    
      
      const state = Flip.getState(details);
    
      
      Flip.fit(details, activeItem, { scale: true, fitChild: detailImage });
    
      
      const tl = gsap.timeline();
      tl.set(details, { overflow: "hidden" })
        .to(detailContent, { yPercent: -100 })
        .to(activeItem, { opacity: 1 });
    
      
      Flip.from(state, {
        scale: true,
        duration: 0.5,
        delay: 0.2, 
        onInterrupt: () => tl.kill()
      })
        .set(details, { visibility: "hidden" });
        
      activeItem = null;
    }

    
    gsap.utils.toArray('.item').forEach(item => item.addEventListener('click', () => showDetails(item)));

    

    
    return () => {
      document.removeEventListener('click', hideDetails);
    gsap.utils.toArray('.item').forEach(item => item.removeEventListener('click', () => showDetails(item)));
    };

  }, []); 

return (
<div className='fakeBody'>
  
   <div className="app">
    <div className="gallery">
      <div className="item" data-title="Sander Sagosen" data-secondary="Norways Golden Boy" data-text="Sander Sagosen (born 14 September 1995) is a Norwegian professional handball player for Kolstad Håndball and the Norwegian national team. At club level, he has won major titles in four countries, including league championships in Norway, Denmark, France and Germany. With the national team, Sagosen placed second at the World Championship in 2017 and 2019, and finished third at the 2020 European Championship. Sagosen was included on the All-Star team for five consecutive major international competitions as either best centre back or left back.">
        <img src={Sagosen} alt="" />
    </div>
    <div className="item" data-title="Nikola Karabatic" data-secondary="The Goat, The Human Tank, The Myth, The Man, The Legend, One Of A Kind" data-text="Nikola Karabatić (born 11 April 1984) is a French former professional handball player. He is regarded as one of the greatest players in handball history. With the French national handball team, he won three Olympic gold medals (Summer Olympics of 2008, 2012 and 2020), four World Championship gold medals (2009, 2011, 2015 and 2017) as well as four gold medals in the European Championship (2006, 2010, 2014 and 2024). He also won L'Équipe Champion of Champions in 2011. He is regarded as one of the greatest players in handball history, and he was IHF World Player of the Year for a male record-tying three times, in 2007, 2014, and 2016.">
      <img src={Nikola} alt="" />
    </div>
    <div className="item" data-title="Daniel Narcisse" data-secondary="The 4-steps man" data-text="Daniel Narcisse (born 16 December 1979) is a retired French handball player and French international from 2000 to 2017. He is a double Olympic champion, quadruple World champion and triple European champion, one of the most awarded French team handball players with nine international titles. He progresses to the position of half-center or rear left. In 2012, with an exceptional year both in the French team (Olympic title) and in the club (Champions League, German championship and German cup), he was voted best handball player of the year 2012 by the International Handball Federation.">
      <img src={Narcisse}alt="" />
    </div>
    <div className="item" data-title="Didier Dinart" data-secondary="La Roca" data-text="Didier Dinart (born 18 January 1977) is a French retired handball player and current coach of US Ivry Handball. During his playing days, he played for the internationally renowned BM Ciudad Real handball team in Spain (where he was partner to, among others, Luc Abalo). Before joining BM Ciudad Real, he played for Montpellier HB of which is currently one of the best French clubs. He was a highly skilled defensive player, and is widely regarded as one of the world's best handball defensive players.This effectiveness has granted him the nickname of La Roca (The Rock) in Spain. He is also one of the most enduring players of the national team: his first appearance on the team was on 20 December 1996 against Croatia. He won all three major titles in handball (European championship, world championship, Olympic championship). He has represented France at four Olympic Games, including winning the gold medal at the 2008 Beijing Olympics and the 2012 London Olympics.">
      <img src={Dinart} alt="" />
    </div>
    <div className="item" data-title="Mikkel Hansen" data-secondary="The headband personified." data-text="Mikkel Hansen (born 22 October 1987) is a Danish former professional handball player. Widely regarded as one of the greatest handball players of all time, Hansen has won the IHF World Player of the Year a record-tying three times.">
      <img src={Mikkel} alt="" />
    </div>
    <div className="item" data-title="William Accambray" data-secondary="The man bun personified" data-text="William Gérald Accambray (born 8 April 1988) is a French handball player who plays for Saran Loiret Handball and for the French national team. With the French national team, he won the World Championship in 2011. He is the son of hammer thrower Jacques Accambray and Isabelle Accambray.">
      <img src={Accambray} alt="" />
    </div>
    
    
 </div>
 
</div>

<div className="detail">
  <img />
  <div className="content">
    <div className="title">Placeholder for main title</div>
    <div className="secondary">Placeholder for under title</div>
    <div className="description">Description</div>
  </div>
</div>
    </div>
    
  );
}

export default CardFlip;