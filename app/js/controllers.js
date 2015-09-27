app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Your handmade jewelry website!';
    $scope.subtitle = 'Find handmade jewelry, charms and more';
    $scope.jewelry = [
        {
            name: 'Autumn Brooch',
            made_by: 'Mimmy.me',
            price: 19,
            category: 'Brooches and pins',
            photo: 'img/autumnbrooch.jpg',
            description: 'Polymer clay pin in warm autumn colors. Handcrafted by mimmy.me in limited amounts. ' +
                'Varieties of the pin can be ordered personally.',
            dimentions: '6cm',
            material: 'Polymer clay, metal'

        },
        {
            name: 'Cherry Blossom Brooch',
            made_by: 'Mimmy',
            price: 10,
            category: 'Brooches and pins',
            photo: 'img/cherryblossombrooch.jpg',
            description: 'A brooch, inspired by the blossoming Japanese Sakura. Simple and stylish, it goes great with both a casual ' +
                'and a more professional outfit. The brooch can be matched with a Sakura ring. A hairpin can be made upon request.',
            dimentions: '9cm',
            material: 'Polymer clay, metal'
        },
        {
            name: 'Cherry Blossom Ring',
            made_by: 'Me',
            price: 36,
//            pubdate: new Date('2010', '06', '08'),
            category: 'Rings',
            photo: 'img/cherryblossomring.jpg',
            description: 'The ring from the Sakura brooch+ring set',
            dimentions: '4cm',
            material: 'Polymer clay, metal'

        },
        {
            name: 'Butterfly Ring',
            made_by: 'Me',
            price: 36,
//            pubdate: new Date('2010', '06', '08'),
            category: 'Rings',
            photo: 'img/blackbutterflyring.jpg',
            description: 'For a more edgy or evening look, this ring is perfect! Feminine, but bold, it\'s the perfect addition ' +
                'to your jewelry collection!',
            dimentions: '6cm',
            material: 'Polymer clay, metal'

        },
        {
            name: 'Blue flowers',
            made_by: 'Mimmy',
            price: 8,
            category: 'Brooches and pins',
            photo: 'img/blueflowerbrooch.jpg',
            description: 'Now that there is the Tec-9, a crappy spray gun from South Miami. ' +
                'This gun is advertised as the most popular gun in American crime. Do you believe ' +
                'that shit? It actually says that in the little book that comes with it: the most popular' +
                ' gun in American crime. Like they\'re actually proud of that shit.',
            dimentions: '8cm',
            material: 'Polymer clay, metal'
        },
        {
            name: 'Fruit Key Decoration',
            made_by: 'Mimmy',
            price: 8,
            category: 'Other',
            photo: 'img/fruitkeys.jpg',
            description: 'You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, ' +
                'it took us a week to climb out. Now, I don\'t know exactly when we turned on each other, but I know that ' +
                'seven of us survived the slide... and only five made it out. Now we took an oath, that I\'m breaking now. ' +
                'We said we\'d say it was the snow that killed the other two, but it wasn\'t. Nature is lethal but it doesn\'t hold ' +
                'a candle to man.',
            dimentions: '-',
            material: 'Polymer clay'
        },
        {
            name: 'Red Flower Hair Clip',
            made_by: 'Mimmy',
            price: 8,
            category: 'Hair decorations',
            photo: 'img/redflowerhairclip.jpg',
            description: 'Now that we know who you are, ' +
                'I know who I am. I\'m not a mistake! It all makes sense! In a comic, you know how you can tell who the ' +
                'arch-villain\'s going to be? He\'s the exact opposite of the hero. And most times they\'re friends, like ' +
                'you and me! I should\'ve known way back when... You know why, David? Because of the kids. They called me Mr Glass',
            dimentions: '-',
            material: 'Polymer clay'
        }
    ];
}]);