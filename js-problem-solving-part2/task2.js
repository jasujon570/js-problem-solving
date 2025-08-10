
/**
 * Find the friend with the smallest name.
 * const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */


const friendsName = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'ab'];

function findSmallest(names){
    let smallName = names[0];
    // console.log(friendsName);
    for (const element of names) {
        if(element.length < smallName.length){
            smallName = element;
        }
    }
    return smallName;
}

const smallestName = findSmallest(friendsName);
console.log(smallestName);

