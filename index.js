//////////////////////////////////////////////////////////
//                                                      //
//                   ALEX OLHOVSKIY                     //
//                                                      //
//////////////////////////////////////////////////////////





const names = ["Sasha", "Masha", "Piter", "Jackson", "Romul", "Akhmet", "Si", "Inokentiy", "Buba", "Ciao", "Gaga"];
const surnames = ["Gricacuev", "Shmonia", "Rabinovich", "Petrov", "Smirnov", "Kovbasa", "Sirko", "Smith", "Bond", "Tramp", "Pisdauskas"];
const jobs = [{ job_name: "plumber", min: 1000, max: 2000 },
{ job_name: "electrician", min: 1500, max: 2500 },
{ job_name: "programmer", min: 2500, max: 3000 },
{ job_name: "director", min: 5000, max: 10000 },
{ job_name: "accountant", min: 2500, max: 4000 },
{ job_name: "tester", min: 2000, max: 3000 },
{ job_name: "analyst", min: 3000, max: 4000 },
{ job_name: "marketer", min: 4000, max: 5000 },
{ job_name: "cleaner", min: 1000, max: 2000 },
{ job_name: "driver", min: 2000, max: 3000 },
{ job_name: "president", min: 50000, max: 50000 },
{ job_name: "actor", min: 2000, max: 100000 }];
const companies = ["Google", "Yandex", "Boeing", "Airbus", "Boston Dynamics", "Umbrella", "Cisco Robotics"];
const addresses = [{ city: "New York", streets: ["Broadway", "Wall Street", "Park Avenu", "5th Avenu"] },
{ city: "Istanbul", streets: ["Istiklal Avenu", "Abdi Ipekci", "Serdar-i Ekrem", "Cukurcuma", "Bagdat"] },
{ city: "Paris", streets: ["Rue de Rivoli", "Avenue Montaigne", "Rue Lepic", "Rue Montorgueli", "Boulevard de Clichy"] },
{ city: "London", streets: ["Carnaby Street", "Oxford Street", "Piccadilly", "Downing Street", "Abbey Road"] },
{ city: "Sydney", streets: ["Surry Hills", "Pyrmont", "Darlinghurst", "Redfern", "Haymarket", "Potts Point"] },
{ city: "Abu-Dhabi", streets: ["Al Sharqi St", "Muroor Road", "Lulu Rd", "Al Dhafra Rd", "Al Salam St"] },
{ city: "CapeTown", streets: ["Belleville", "Adderley Street", "Long Street", "Strand Street"] },
{ city: "San Francisko", streets: ["The Castro", "Grant Avenu", "Embarcadero", "Haight Street", "Lombard Street"] },
{ city: "LA", streets: ["Hollywood Boulevard", "Beverly Boulevard", "Century Boulevard", "Santa Monica Boulevard", "Sunset Boulevard"] }];

const emails = ["@gmail.com", "@yahoo.com", "@mail.ru", "@rambler.com", "@yandex.ru"]
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



function abracadabra_generator(size, key) {
    var rate = 26 / 36;
    var res = new Array();
    switch (key) {
        case 0:
            for (var i = 0; i < size; i++) {
                if (Math.random() < rate) {
                    res.push(letters[Math.round(Math.random() * (letters.length - 1))]);
                } else {
                    res.push(numbers[Math.round(Math.random() * (numbers.length - 1))]);
                }
            }
            break;
        case 1:
            for (var i = 0; i < size; i++) {
                res.push(letters[Math.round(Math.random() * (letters.length - 1))]);
            }
            break;
        case 2:
            for (var i = 0; i < size; i++) {
                res.push(numbers[Math.round(Math.random() * (numbers.length - 1))]);
            }
            break;
    }
    return res.join('');
}



function getPerson() {
    var a = Math.round(Math.random() * (addresses.length - 1));
    var j = Math.round(Math.random() * (jobs.length - 1));
    const S = 30;
    var e = Math.round(Math.random() * S);
    var w = Math.round(jobs[j].min + ((jobs[j].max - jobs[j].min) * e) / S);
    var name = names[Math.round(Math.random() * (names.length - 1))];
    var em = emails[Math.round(Math.random() * (emails.length - 1))];



    var obj = {
        name: name,
        surname: surnames[Math.round(Math.random() * (surnames.length - 1))],
        age: 30 + Math.round(Math.random() * 30),
        job: jobs[j].job_name,
        company: companies[Math.round(Math.random() * (companies.length - 1))],
        address: {
            city: addresses[a].city,
            street: addresses[a].streets[Math.round(Math.random() * (addresses[a].streets.length - 1))],
            house: 1 + Math.round(Math.random() * 100)
        },
        experience: e,
        wage: w,
        email: name.toLowerCase() + abracadabra_generator(5, 0) + em,
        pass: abracadabra_generator(6 + Math.round(Math.random() * 6), 0),
        insurance_number: abracadabra_generator(10, 2),
    };
    return obj;
}


function getPersons(size, j) {
    var arr = new Array();
    for (var i = 0; i < size; i++) {
        arr.push(getPerson());
    }

    if (j) {
        return JSON.stringify(arr);
    } else {
        return arr;
    }
}


module.exports = {
    getPersons: getPersons,
    getPerson: getPerson,
    abracadabra_generator: abracadabra_generator
}

















