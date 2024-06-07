import { useState, useEffect, useRef } from 'react'
import Button from '../Button/Button'
import './StickyNav.scss'

const StickyNav = ({ selectedCount, selectedAmount }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [stickyOffset, setStickyOffset] = useState(0);
  const navRef = useRef(null)
  
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
      } else {
        navRef.current.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stickyOffset]);

  return (
    <>
      <nav ref={navRef}>
          <div className="stickyNavContainer">
              <div className="amountTrackContainer">
                  <p>Total Amount:</p>
                  <p className='totalAmount'>£{selectedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
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