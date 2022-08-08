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

console.log('added to collection', addToCollection('Is This It', 'The Strokes', 2001));
console.log(collection);