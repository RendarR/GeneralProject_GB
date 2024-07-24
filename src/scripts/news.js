// Основной компонент
Vue.component('news', {
  data() {
    return {
        news: [
            {
                img: './src/assets/img/news1.png',
                tittle: 'Создадим лучший макет перепланировки',
                data: '26 Декабрь, 2022',
                about: 'Дизайн Кухни',
            },
            {
                img: './src/assets/img/news2.png',
                tittle: 'Создадим лучший макет перепланировки',
                data: '26 Декабрь, 2022',
                about: 'Дизайн Кухни',
            },
            {
                img: './src/assets/img/news3.png',
                tittle: 'Создадим лучший макет перепланировки',
                data: '26 Декабрь, 2022',
                about: 'Дизайн Кухни',
            },
            {
                img: './src/assets/img/news4.png',
                tittle: 'Создадим лучший макет перепланировки',
                data: '26 Декабрь, 2022',
                about: 'Дизайн Кухни',
            },
            {
                img: './src/assets/img/news5.png',
                tittle: 'Создадим лучший макет перепланировки',
                data: '26 Декабрь, 2022',
                about: 'Дизайн Кухни',
            },
            {
                img: './src/assets/img/news6.png',
                tittle: 'Создадим лучший макет перепланировки',
                data: '26 Декабрь, 2022',
                about: 'Дизайн Кухни',
            }
        ],
        countNews: '3', 
    };
  },
  computed: {
    newsCount(){
        const arrayNews = [...this.news].splice(0,this.countNews)
        console.log(arrayNews)
        return  arrayNews;
    },
  },
  template: `
        <ul class="news__list grid grid--3" >
            <li class="news__item" v-for="item in newsCount" :key="item.id">
                <a href="#">
                    <article class="news-card">
                        <img class="news-card__image" :src="item.img" alt="article" width="340"
                            height="290" loading="lazy">
                        <h5 class="news-card__title">{{item.tittle}}</h5>
                        <div class="news-card__body">
                            <p class="news-card__description">{{item.data}}</p>
                            <button class="btn__circul"><img src="./src/assets/img/vector2.png" alt=""></button>
                        </div>
                        <p class="news-card__category">{{item.about}}</p>
                    </article>
                </a>
            </li>
        </ul>`
});