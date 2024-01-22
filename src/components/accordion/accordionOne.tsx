import React, { FC, useState } from 'react';
import styles from './accordion.module.css';

interface AccordionItem {
  header: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles['accordion-item']}>
          <div
            className={`${styles['accordion-header']} ${activeIndex === index ? styles.active : ''} ${activeIndex === index ? styles.invisible : styles.visible}`}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleClick(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-expanded={activeIndex === index}
            aria-controls={`${styles['accordion-content']}-${index}`}
          >
           <p> {item.header} </p> <img className = {styles.icon} src = "chevron-down.svg" width = "12"/>   
          </div>

          <div className={styles['accordion-content-container']}>
            <div
              id={`${styles['accordion-content']}-${index}`}
              className={`${styles['accordion-content']} ${activeIndex === index ? styles.open : ''}`}
              aria-hidden={activeIndex !== index}
              aria-labelledby={`accordion-header-${index}`}
            >
            <p> {item.content} </p> <img className = {styles['icon-expanded']} src = "chevron-down.svg" width = "12" height = ""/> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;