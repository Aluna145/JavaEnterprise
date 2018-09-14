# Game of thrones: CARD MAKER!
###  Description
Create your personal card: "Happy Birthday", "Women day", "Hello, friend" with the Game of Thrones world! 
 1. Choose character or family
 2. Customize your card: add wishes, quotes, names, background
 3. Enjoy result!

## API

 - [An API of Ice And Fire](https://anapioficeandfire.com/)
 - [Javascript wrapper for the song of ice and fire API](https://github.com/arbazsiddiqui/A-song-of-ice-and-fire-AP)

## Example response
[Documentation](https://anapioficeandfire.com/Documentation)

```javascript
> var asoaif = require('asoiaf-api');
> asoaif.getCharacterByName("Jon Snow");


[ { url: 'http://www.anapioficeandfire.com/api/characters/583',
    name: 'Jon Snow',
    gender: 'Male',
    culture: 'Northmen',
    born: 'In 283 AC',
    died: '',
    titles: [ 'Lord Commander of the Night\'s Watch' ],
    aliases: 
     [ 'Lord Snow',
       'Ned Stark\'s Bastard',
       'The Snow of Winterfell',
       'The Crow-Come-Over',
       'The 998th Lord Commander of the Night\'s Watch',
       'The Bastard of Winterfell',
       'The Black Bastard of the Wall',
       'Lord Crow' ],
    father: '',
    mother: '',
    spouse: '',
    allegiances: [ 'http://www.anapioficeandfire.com/api/houses/362' ],
    books: [ 'http://www.anapioficeandfire.com/api/books/5' ],
    povBooks: 
     [ 'http://www.anapioficeandfire.com/api/books/1',
       'http://www.anapioficeandfire.com/api/books/2',
       'http://www.anapioficeandfire.com/api/books/3',
       'http://www.anapioficeandfire.com/api/books/8' ],
    tvSeries: [ 'Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5' ],
    playedBy: [ 'Kit Harington' ] } ]
```
