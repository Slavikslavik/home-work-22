'use strict';

const films = [
    {
        title :'Спеши любить',
        genre : 'драма',
        year :'1990',
    },
    {
        title :'Как я встретил вашу маму',
        genre : 'комедия',
        year :'2003',
    },
    {
        title :'Славные парни',
        genre : 'криминал',
        year :'1980',
    }
];
//console.log(Object.keys(films));

const sortFilms = function(film){
    const array = {};
    film.forEach((value) => {
        const {title,...rest} = value;
        Object.defineProperty(array,
            title,
            {value:[rest],enumerable:true});
    });
    return array;
};
const sortedFilms = sortFilms(films);
//console.dir(sortedFilms);
//console.log(Object.keys(sortedFilms));

sortedFilms[Symbol.iterator] = function() {
    const items = Object.keys(this);
    //console.log(items.length);
    let itemIndex = 0;
    return {
        next() {
            return {
                value: items[itemIndex++],
                done : itemIndex > items.length
            };
        }
    };
};

for(const key of sortedFilms){
/* eslint-disable */
    console.log(key);
};



