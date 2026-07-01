import React from 'react';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entenda mais sobre inventário, visão e seus serviços.
          </h2>
          <p className="text-gray-600 text-lg">
            Assista agora este vídeo para você entender melhor.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group">
          {/* Aspect Ratio Maintainer */}
          <div className="aspect-[16/9]">
            <video 
              className="w-full h-full object-cover"
              controls
              playsInline
            >
              <source src="video3.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};