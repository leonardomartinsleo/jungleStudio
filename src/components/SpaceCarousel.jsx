import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const slides = [
  {
    img: '/images/page3_img1.jpeg',
    title: 'Sala Ipê — Dia',
    desc: 'Luz natural generosa, plantas tropicais e vista panorâmica do centro de SP.',
  },
  {
    img: '/images/page5_img1.jpeg',
    title: 'Sala PRO',
    desc: 'Espaço amplo com iluminação cênica, garrafa ball, swing e parede terracota.',
  },
  {
    img: '/images/page4_img1.jpeg',
    title: 'Entrada',
    desc: 'Ambientação verde, arte no corredor e um cenário diferente a cada passo.',
  },
  {
    img: '/images/page6_img3.jpeg',
    title: 'Sala Ipê — Noite',
    desc: 'A luz artificial realça cada detalhe. Um ambiente completamente transformado.',
  },
  {
    img: '/images/page7_img3.jpeg',
    title: 'Sala PRO — Noite',
    desc: 'Luzes coloridas, garrafa ball girando e uma energia inigualável para seus sets.',
  },

];

export default function SpaceCarousel() {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const intervalRef = useRef(null);

  const startAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    if (!modalOpen) {
      startAuto();
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [modalOpen]);

  const handleSlideClick = (idx) => {
    clearInterval(intervalRef.current);
    if (idx === active) {
      setModalImg(slides[idx].img);
      setModalOpen(true);
    } else {
      setActive(idx);
      startAuto();
    }
  };

  const getOffset = (i) => {
    let offset = i - active;
    const half = Math.floor(slides.length / 2);
    if (offset < -half) offset += slides.length;
    if (offset > half) offset -= slides.length;
    return offset;
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      clearInterval(intervalRef.current);
      if (isLeftSwipe) {
        setActive((prev) => (prev + 1) % slides.length);
      } else {
        setActive((prev) => (prev - 1 + slides.length) % slides.length);
      }
      startAuto();
    }
  };

  return (
    <div>
      <div 
        className="spaces-track-wrap" 
        style={{ position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEndHandler}
      >
        {slides.map((slide, i) => {
          const offset = getOffset(i);
          const isCenter = offset === 0;

          // Calculate X position
          // Center is 520px wide, others are 360px wide. Gap is 24px.
          let translateX = 0;
          if (offset !== 0) {
            const sign = Math.sign(offset);
            const absOffset = Math.abs(offset);
            // distance from center to first side item: 520/2 + 360/2 + 24 = 260 + 180 + 24 = 464
            // distance for subsequent items: 360 + 24 = 384
            translateX = sign * (464 + (absOffset - 1) * 384);
          }

          return (
            <div
              key={i}
              className={`space-card${isCenter ? ' active' : ''}`}
              onClick={() => handleSlideClick(i)}
              style={{
                position: 'absolute',
                transform: `translateX(${translateX}px)`,
                zIndex: isCenter ? 10 : 5 - Math.abs(offset),
                opacity: Math.abs(offset) > 2 ? 0 : 1, // hide items too far away
                transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
            >
              <img src={slide.img} alt={slide.title} />
              <div className="space-card-overlay">
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
                {isCenter && (
                  <span style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--green-light)', fontWeight: 'bold' }}>
                    Clique para ampliar
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="carousel-nav">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-nav-dot${i === active ? ' active' : ''}`}
            onClick={() => {
              clearInterval(intervalRef.current);
              setActive(i);
              startAuto();
            }}
          />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', color: '#555', fontWeight: 500 }}>
          <strong style={{ color: 'var(--green-dark)' }}>{slides[active].title}</strong> — {slides[active].desc}
        </p>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>
              <X size={32} />
            </button>
            <img src={modalImg} alt="Ampliado" />
          </div>
        </div>
      )}
    </div>
  );
}
