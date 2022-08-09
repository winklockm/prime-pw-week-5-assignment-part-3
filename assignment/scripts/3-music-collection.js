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

function findByArtist(artist) {
    let searchResults = [];
    for(let i=0; i<collection.length; i++){
        //console.log(collection[i].albumArtist + ' equals ' + artist +'?');
        if(collection[i].albumArtist === artist){
            searchResults.push(collection[i]);
        }
    }
    return searchResults;
}// end findByArtist

function search(criteria)   {
    let matches = [];
    console.log('in search function looking for', criteria.artist, 'and', criteria.year);
    
    for(let i=0; i<collection.length; i++){ //loops through

        if(criteria.artist === collection[i].albumArtist && criteria.year === collection[i].albumYearPublished){
            matches.push(collection[i]); //add Ray Charles to matches array
            console.log(matches);
        } //end if
    }
}


function showCollection(array)   {
    console.log('number of albums in my collection:', array.length);
    for(let i=0; i<array.length; i++){
        console.log(array[i].albumTitle + ' by ' + array[i].albumArtist + ', published in', array[i].albumYearPublished);
    }
} //end showCollection

console.log('add first to collection', addToCollection('Is This It', 'The Strokes', 2001));
console.log('add second album to collection', addToCollection('Bloodnstuff', 'Bloodnstuff', 2015));
console.log('add third album to collection', addToCollection('Manipulator', 'Ty Segall', 2014));
console.log('add fourth album to collection', addToCollection('Modern Country', 'William Tyler', 2016));
console.log('add fifth album to collection', addToCollection('Pretzel Logic', 'Steely Dan', 1974));
console.log('add sixth album to collection', addToCollection('Aja', 'Steely Dan', 1977));
console.log('My collection is:', collection);

console.log(showCollection(collection));

console.log('search: Steely Dan', findByArtist('Steely Dan'));
console.log('searching: Ludacris', findByArtist('Three 6 Mafia'));
console.log('searching: William Tyler', findByArtist('William Tyler'));

search({ artist: 'The Strokes', year: 2001 });
search({ artist: 'The Strokes', year: 2011 });
search({ artist: 'Ray Charles', year: 1957 });
search({ artist: 'Steely Dan', year: 1977 });
// search();