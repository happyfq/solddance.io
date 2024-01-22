'use client';
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Navbar from 'components/Navbar';
import { motion } from "framer-motion";

function Story() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div style={{ color: 'white' }}>
      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <Parallax ref={parallax} pages={1.25}>
          <ParallaxLayer sticky={{ start: 0 }}>
            <Navbar />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.6}
            factor={1.5}
            style={{
              backgroundImage: `url('slides/background.png')`,
              backgroundPosition: 'center',
              width: '100%',

              backgroundSize: 'cover',
            }}
          />
          <ParallaxLayer offset={0.8} speed={1.6} factor={0}>
            <div>
              <p
                style={{
                  color: 'white',
                  fontSize: '38px',
                  textAlign: 'center',
                  fontFamily: 'cursive',
                  fontWeight: 'bold',
                }}
              >
                Step into the Uncharted World of <br></br>Radiotron
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} speed={1.7} factor={0}>
            <div className="flex justify-center">
              <button
                style={{
                  color: 'white',
                  fontSize: '24px',
                  backgroundColor: 'indigo',
                  textAlign: 'center',
                  cursor: 'pointer',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '8px',
                }}
              >
                Explore
              </button>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.5}
            speed={0.5}
            factor={1}
            style={{
              backgroundImage: `url('slides/foreground.png')`,
              backgroundPosition: 'center',
              width: '100%',

              backgroundSize: 'cover',
            }}
          />
        </Parallax>
      </motion.div>
    </div>
  );
}
export default Story;
