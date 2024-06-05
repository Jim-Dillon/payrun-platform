import { useState, useEffect, useRef } from 'react'
import Button from '../Button/Button'
import './StickyNav.scss'

const StickyNav = ({ selectedCount }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [stickyOffset, setStickyOffset] = useState(0);
  const navRef = useRef(null)
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
      if (window.pageYOffset >= stickyOffset) {
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
      <div ref={placeholderRef} style={{ display: 'none', height: '50px' }}></div>
      <nav ref={navRef}>
          <div className="stickyNavContainer">
              <div className="amountTrackContainer">
                  <p>Total</p>
                  <p className='totalAmount'>£450,000</p>
              </div>
              <Button
                  label={`Approve (${selectedCount})`}
                  variant='primary'
                  size={isMobile ? 'small' : ''}
              >
              </Button>
          </div>
      </nav>
    </>
    
  )
}

export default StickyNav