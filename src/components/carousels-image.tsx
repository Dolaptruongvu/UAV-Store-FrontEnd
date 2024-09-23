import React from 'react';
import PropTypes from 'prop-types';

// Định nghĩa kiểu dữ liệu cho các tham số
interface CarouselImageProps {
  img: string;
  text?: string;
}

function CarouselImage({ img, text }: CarouselImageProps) {
    return (
      <div className="carousel-image-container" style={{ 
          width: '100%', 
          height: '100%', 
          overflow: 'hidden', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', 
        }} >
          <img 
            src={"/carouselImages/" + img + ".jpg"} 
            alt={text} 
            style={{ 
              width: 'auto',          // Giữ chiều rộng tự động điều chỉnh
              maxHeight: '500px',      // Giới hạn chiều cao không vượt quá 500px
              objectFit: 'contain',
              borderRadius:'10px'    // Đảm bảo ảnh hiển thị toàn bộ bên trong khung hình mà không bị cắt xén
            }} 
          />
      </div>
    );
}


CarouselImage.propTypes= {
    img: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default CarouselImage;
