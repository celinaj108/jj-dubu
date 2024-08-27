const app = Vue.createApp({
    data() {
        return{
            mypick: 'My POV of Us',
            image: './assets/images/IMG_5573.JPG',
            variants: [
                { id: 1, color: 'lavender', caption: 'Pic I see when I miss you', image:'./assets/images/IMG_5573.JPG'},
                { id: 2, color: 'lavenderblush', caption: 'Favorite Memory', image:'./assets/images/fav.jpeg'},
                { id: 3, color: 'lightblue', caption: 'Why I love you', image:'./assets/images/image 1.jpeg'},
                { id: 4, color: 'thistle', caption: 'Favorite pic of you', image:'./assets/images/favpic.jpeg'},
                { id: 5, color: 'sandybrown', caption: 'Our thing', image:'./assets/images/ourthing.jpeg'},
                { id: 6, color: 'darkseagreen', caption: 'First time in my life', image:'./assets/images/image 9.jpg'},
                { id: 7, color: 'darkcyan', caption: 'How I want you to see me', image:'./assets/images/princess.jpg'},
                { id: 8, color: 'mistyrose', caption: 'Most flattering moment', image:'./assets/images/flattering.jpeg'},
                { id: 9, color: 'plum', caption: 'Us until now', image:'./assets/images/us2.jpeg'},
                { id: 10, color: 'steelblue', caption: 'When I went out my boundaries', image:'./assets/images/out.jpeg'},
                { id: 11, color: 'palevioletred', caption: 'My sneakiness', image:'./assets/images/sneaky.jpeg'},
                { id: 12, color: 'honeydew', caption: 'When I am with you', image:'./assets/images/when.jpg'}
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image=variantImage
        }
    }
})