import { useState, useEffect } from 'react'
import Button from '../Button/Button'
import './StickyNav.scss'

const StickyNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
        <div className="stickyNavContainer">
            <div className="amountTrackContainer">
                <p>Total</p>
                <p className='totalAmount'>£450,000</p>
            </div>
            <Button
                label='Approve (30)'
                variant='primary'
                size={isMobile ? 'small' : ''}
            >
                
            </Button>
            
        </div>
    </nav>
  )
}

export default StickyNav