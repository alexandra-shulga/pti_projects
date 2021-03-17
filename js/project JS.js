var index = 0;
var numberOfflats = house.kvartiry.length;
while (index < numberOfflats) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 20 ) {
        console.log(flat.ktoZivet);
    }
    index++;
}

var index = 0;
var numberOfflats = house.kvartiry.length;
while (index < numberOfflats) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 20 ) {
        var index2 = 0;
        var numberOfobjects = flat.predmetiVnutri.length;
        while (index2 < numberOfobjects) {
            var predmet = flat.predmetiVnutri [index2];
            if ( predmet.imyaPredmeta === 'холодильник' ) {
                console.log(predmet.zvet);
            }
            index2++;
        }
    }
    index++;
}

var index = 0;
var numberOfflats = house.kvartiry.length;
while (index < numberOfflats) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 20 ) {
        var index2 = 0;
        var numberOfobjects = flat.predmetiVnutri.length;
        while (index2 < numberOfobjects) {
            var predmet = flat.predmetiVnutri [index2];
            if ( predmet.imyaPredmeta === 'телевизор' ) {
                console.log(predmet.kolichestvoKanalov);
            }
            index2++;
        }
    }
    index++;
}

var index = 0;
var numberOfflats = house.kvartiry.length;
while (index < numberOfflats) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 20 ) {
        var index2 = 0;
        var numberOfobjects = flat.predmetiVnutri.length;
        while (index2 < numberOfobjects) {
            var predmet = flat.predmetiVnutri [index2];
            if ( predmet.imyaPredmeta === 'пылесос' ) {
                console.log(predmet.zvet);
            }
            index2++;
        }
    }
    index++;
}

var index = 0;
var numberOfflats = house.kvartiry.length;
while (index < numberOfflats) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 20 ) {
        console.log(flat.ktoZivet);
        var index2 = 0;
        var numberOfobjects = flat.predmetiVnutri.length;
        while (index2 < numberOfobjects) {
            var predmet = flat.predmetiVnutri[index2];
            if ( predmet.imyaPredmeta === 'сервант' ) {
                var servant = predmet;
                servant.otkrit();
                var soderzhimoe = servant.poluchitSoderzhimoe();
                for(var i = 0; i < soderzhimoe.length; i++) {
                    var obj = soderzhimoe[i];
                    if (obj.name === 'револьвер') {
                        var revolver = obj;
                        console.log(revolver.color)
                    }
                }
                servant.zakrit();
            }
            index2++;
        }
    }
    index++;
}

var index = 0;
var numberOfflats = house.kvartiry.length;
while (index < numberOfflats) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 20 ) {
        var index2 = 0;
        var numberOfobjects = flat.predmetiVnutri.length;
        while (index2 < numberOfobjects) {
            var predmet = flat.predmetiVnutri[index2];
            if ( predmet.imyaPredmeta === 'телевизор' ) {
                var tv = predmet;
                tv.vkluchit();
                var programma = tv.poluchitTekushuuProgrammu();
                if ( predmet.vkluchen ) {
                    return programma;
                } else {
                    return
                }
            }
            index2++;
        }
    }
    index++;
}

var numberOfflats = house.kvartiry.length;
for (var index = 0; index < numberOfflats; index++) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 20 ) {
        var numberOfobjects = flat.predmetiVnutri.length;
        for (var index2 = 0; index2 < numberOfobjects; index2++) {
            var predmet = flat.predmetiVnutri[index2];
            if ( predmet.imyaPredmeta === 'сервант' ) {
                var servant = predmet;
                servant.otkrit();
                var soderzhimoe = servant.poluchitSoderzhimoe();
                for (var i = 0; i < soderzhimoe.length; i++) {
                    var obj = soderzhimoe[i];
                    if (obj.name === 'револьвер') {
                        var revolver = obj;
                        console.log(revolver.color)
                    }
                }
                servant.zakrit();
            }
        }
    }
}

// var kvartira20 = house.kvartiry.find(flat => flat.nomerKvartiri === 20);
// var kvartira20 = house.kvartiry.find(function (flat) { return flat.nomerKvartiri === 20 });
// console.log(kvartira20.ktoZivet);
// var servant = kvartira20.predmetiVnutri.find(predmet => predmet.imyaPredmeta === 'сервант');
// servant.otkrit();
// servant.poluchitSoderzhimoe();

var index = 0;
var numberOfflats = house.kvartiry.length;
while (index < numberOfflats) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 25 ) {
        console.log(flat.ktoZivet);
    }
    index++;
}

var index = 0;
var numberOfflats = house.kvartiry.length;
while (index < numberOfflats) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 25 ) {
        var index2 = 0;
        var numberOfobjects = flat.predmetiVnutri.length;
        while (index2 < numberOfobjects) {
            var predmet = flat.predmetiVnutri [index2];
            if ( predmet.imyaPredmeta === 'кот' ) {
                console.log(predmet.name);
            }
            index2++;
        }
    }
    index++;
}

var index = 0;
var numberOfflats = house.kvartiry.length;
while (index < numberOfflats) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 25 ) {
        console.log(flat.ktoZivet);
        var index2 = 0;
        var numberOfobjects = flat.predmetiVnutri.length;
        while (index2 < numberOfobjects) {
            var predmet = flat.predmetiVnutri [index2];
            if ( predmet.imyaPredmeta === 'шкаф' ) {
                console.log(predmet.zvet);
            }
            index2++;
        }
    }
    index++;
}

var numberOfflats = house.kvartiry.length;
for (var index = 0; index < numberOfflats; index++) {
    var flat = house.kvartiry[index];
    if ( flat.nomerKvartiri === 25 ) {
        var numberOfobjects = flat.predmetiVnutri.length;
        for (var index2 = 0; index2 < numberOfobjects; index2++) {
            var predmet = flat.predmetiVnutri[index2];
            if ( predmet.imyaPredmeta === 'шкаф' ) {
                var capboard = predmet;
                capboard.otkrit();
                var soderzhimoe = capboard.poluchitSoderzhimoe();
                for (var i = 0; i < soderzhimoe.length; i++) {
                    var obj = soderzhimoe[i];
                    if (obj.name === 'перчатки') {
                        var gloves = obj;
                        console.log(gloves.color)
                    }
                }
                capboard.zakrit();
            }
        }
    }
}