<template>
  <div>
    <div class="hero">
      <h1>The global community of 1800 free programming clubs for young people</h1>
      <h2>70,000 young people learning with the help of 240,000 volunteer hours in 92 countries</h2>
      <div class="cta">
        <a href="#" class="find">Find a Dojo</a>
        <a href="#" class="volunteer">Volunteer at a Dojo</a>
      </div>
      <div class="images">
        <div class="image">
          <img src="https://picsum.photos/480/320?image=1" />
        </div>
        <div class="image">
          <img src="https://picsum.photos/480/320?image=2" />
        </div>
        <div class="image">
          <img src="https://picsum.photos/480/320?image=3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hero {
    background-image:
      radial-gradient(ellipse at bottom, white, white calc(50% - 2px), transparent 50%, transparent 100%),
      linear-gradient(to bottom, #642580 0%, #9266a6 100%);
    background-size: 200% 300px, 100%;
    background-position: bottom -100px center, top right;
    background-repeat: no-repeat;
  }

  h1 {
    color: white;
    font-weight: 300;
    font-size: 42px;
    text-align: center;
    max-width: 680px;
    margin: 0 auto;
    padding: 50px 0;
  }

  h2 {
    color: white;
    text-align: center;
    max-width: 780px;
    margin: 0 auto;
  }

  .cta {
    display: flex;
    justify-content: center;
    margin: 40px auto;
    max-width: 680px;
  }

  .cta a {
    display: block;
    flex: 1;
    color: white;
    text-decoration: none;
    font-size: 22px;
    margin: 0 20px;
    padding: 10px 20px;
    text-align: center;
    border-radius: 1000px;
    transition: box-shadow 0.2s ease-out, transform 0.2s ease-out;
  }

  .cta a:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.025);
  }

  .cta .find {
    background: #ED684A;
  }

  .cta .volunteer {
    background: #41BAC1;
  }

  .images {
    display: flex;
    max-width: 980px;
    margin: 60px auto 0 auto;
  }

  .image {
    flex: 1;
    justify-content: space-between;
    margin: 0 20px;
  }

  .image img {
    width: 100%;
  }
</style>
