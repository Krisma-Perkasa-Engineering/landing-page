# `carousel-images`

#### `render carousel with 3 images and 1440x1024 screen size`

```html
<div id="carousel-container">
  <div id="carusel-image-container">
    <div
      class="image-container"
      show="true"
    >
      <img alt="Pabrik kimia">
      <h1>
        Ringankan beban Anda dengan konsultasi pada ahlinya
      </h1>
    </div>
    <div
      class="image-container"
      show="false"
    >
      <img alt="Pompa industri">
      <h1>
        Perkuat bisnis anda dengan produk berkualitas
      </h1>
    </div>
    <div
      class="image-container"
      show="false"
    >
      <img alt="Berbagai jenis pompa">
      <h1>
        Hilangkan kekhawatiran anda dengan layanan purna jual yang profesional
      </h1>
    </div>
  </div>
  <carousel-slider-button
    direction="previous"
    id="previous-button"
  >
  </carousel-slider-button>
  <carousel-slider-button
    direction="next"
    id="next-button"
  >
  </carousel-slider-button>
</div>

```

