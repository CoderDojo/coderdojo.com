<template>
  <div class="c-community">
    <div class="c-community__content">
      <h1>Our community is a giant family!</h1>
      <h2>Talk to our community</h2>
      <p class="c-community__text">We're a global family with many places we socialise and get together. We have numerous Coolest Projects where once a year a region get's together and show's off all the youths work. We also have MegaDojos which are less formal one day Dojos where the kids can do whatever they want. And every year we host many DojoCons around the world for volunteers to get together and share their joys and learnings from the past year and hopefully make new friends.</p>
      <div class="c-community__cards">
        <a href="#" class="c-community__card">
          <img src="https://picsum.photos/285/175?image=1" />
          <div class="c-community__card-text">
            <h3>Coolest Projects</h3>
            <p>Lorem ipsum dolor sit amet, nec ex timeam prompta invenire, no mea</p>
          </div>
        </a>
        <a href="#" class="c-community__card">
          <img src="https://picsum.photos/285/175?image=2" />
          <div class="c-community__card-text">
            <h3>MegaDojos</h3>
            <p>Lorem ipsum dolor sit amet, nec ex timeam prompta invenire, no mea</p>
          </div>
        </a>
        <a href="#" class="c-community__card">
          <img src="https://picsum.photos/285/175?image=3" />
          <div class="c-community__card-text">
            <h3>DojoCons</h3>
            <p>Lorem ipsum dolor sit amet, nec ex timeam prompta invenire, no mea</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .c-community {
    background: linear-gradient(180deg, #642D8D 0%, #9D59C1 100%);
    padding: 80px 0 40px 0;
    color: #fff;

    &__content {
      max-width: 960px;
      margin: 0 auto;

      h1 {
        text-align: center;
        font-size: 32px;
        margin: 10px 0;
      }

      h2 {
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        margin: 10px 0;
      }
    }

    &__text {
      margin: 20px auto;
      max-width: 70%;
    }

    &__cards {
      display: flex;
      justify-content: center;
    }

    &__card {
      flex: 1;
      margin: 80px 18px;
      background: #fff;
      color: #222;
      border-radius: 5px;
      text-decoration: none;
      box-shadow: 0 20px 40px 0 rgba(14,24,9,0.20);
      transition: box-shadow 0.2s ease-out;

      &-text {
        margin: 20px 20px 40px 20px;
        text-align: center;

        h3 {
          margin: 8px 0;
          font-size: 20px;
          transition: color 0.2s ease-out;
        }

        p {
          font-size: 13px;
        }
      }

      &:hover {
        box-shadow: 0 25px 45px 0 rgba(14,24,9,0.40);

        .c-community__card-text h3 {
          color: #642580;
        }
      }
    }
  }
</style>
