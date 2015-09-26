app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Your handmade jewelry website!';
    $scope.promo = 'Sbla';
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
            photo: 'img/blueflowerbrooch.jpg'
        },
        {
            name: 'Fruit Key Decoration',
            made_by: 'Mimmy',
            price: 8,
            category: 'Other',
            photo: 'img/fruitkeys.jpg'
        },
        {
            name: 'Red Flowed Hair Clip',
            made_by: 'Mimmy',
            price: 8,
            category: 'Hair decorations',
            photo: 'img/redflowerhairclip.jpg'
        }
    ];
}]);