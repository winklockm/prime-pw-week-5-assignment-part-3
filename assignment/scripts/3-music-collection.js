console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished)  {
    let album = {
        albumTitle: title,
        albumArtist: artist,
        albumYearPublished: yearPublished
    } //end album
    collection.push(album);
    return album;
} //end addToCollection

console.log('add first to collection', addToCollection('Is This It', 'The Strokes', 2001));
console.log('add second album to collection', addToCollection('Bloodnstuff', 'Bloodnstuff', 2015));
console.log('add third album to collection', addToCollection('Manipulator', 'Ty Segall', 2014));
console.log('add fourth album to collection', addToCollection('Modern Country', 'William Tyler', 2016));
console.log('add fifth album to collection', addToCollection('Most Known Unknown', 'Three 6 Mafia', 2005));
console.log('add sixth album to collection', addToCollection('Aja', 'Steely Dan', 1977));
console.log('My collection is:', collection);