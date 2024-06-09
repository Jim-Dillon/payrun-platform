import { useState, useEffect, useRef } from 'react';
import Button from '../Button/Button';
import './StickyNav.scss';

const StickyNav = ({ selectedCount, selectedAmount }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [stickyOffset, setStickyOffset] = useState(0);
  const navRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setStickyOffset(navRef.current.offsetTop);
    }

    const handleScroll = () => {
      if (window.scrollY >= stickyOffset) {
        navRef.current.classList.add('sticky');
        placeholderRef.current.style.display = 'block';
      } else {
        navRef.current.classList.remove('sticky');
        placeholderRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stickyOffset]);

  return (
    <>
      <div
        ref={placeholderRef}
        style={{ display: 'none', height: '50px' }}
      ></div>
      <nav ref={navRef}>
        <div className="stickyNavContainer">
          <div className="amountTrackContainer">
            <p>Total Amount:</p>
            <p className="totalAmount">
              £
              {selectedAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <Button
            label={`Approve (${selectedCount})`}
            variant="primary"
            size={isMobile ? 'small' : ''}
          ></Button>
        </div>
      </nav>
    </>
  );
};

export default StickyNav;
