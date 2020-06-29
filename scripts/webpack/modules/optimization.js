// Core
import ImageminPlugin from 'imagemin-webpack'
import mozjpeg from 'imagemin-mozjpeg'
import pngquant from 'imagemin-pngquant'
import svgo from 'imagemin-svgo'

export const optimizeImages = () => ({
  plugins: [
    new ImageminPlugin({
      imageminOptions: {
        plugins: [
          ['mozjpeg', {
            progressive: true,
            quality: 60,
          },],
          ['pngquant', {
            quality: [0.6, 0.7],
          }],
          [
            'svgo', {
            plugins: [
              {
                removeViewBox: false
              }
            ]
          }
          ]
        ],
      },
    }),
  ],
})
