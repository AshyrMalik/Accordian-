
import { useState } from 'react';
import './index.css';


const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function App() {
  return (
    <div>
      <Accordion data= {faqs} />
    </div>)
}

function Accordion({ data }) {
  const [currOpen, setcurrOpen]=useState(null)
  
  
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem 
            currOpen={currOpen}
            onOpen={setcurrOpen}
            key={i}
            title={el.title}
            text={el.text}
            num={i+1} />
      ))}
    </div>
  );
}
function AccordionItem({currOpen,onOpen,title, text ,num}){
  const isOpen= (num===currOpen);

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return <div className='item' onClick={handleToggle}>
    <p className='number'>{num < 10 ? `0${num}`: num}</p>
    <p className='text'>{title}</p>
    <p className='icon'>{isOpen?"+":"-"}</p>
    
    {isOpen && <div className="content-box">{text}</div>}
   

  </div>
}

export default App;
