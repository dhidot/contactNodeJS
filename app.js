// core module
// file system module
const fs = require('fs');

//create directory data if not exist
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

//create file contacts.json if not exist
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}


// readLine
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pertanyaan1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan nama anda : ', (nama) => {
            resolve(nama);
        });
    });
};

const pertanyaan2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan no HP anda : ', (noHP) => {
            resolve(noHP);
        });
    });
};

const pertanyaan3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan email anda : ', (email) => {
            resolve(email);
        });
    });
};

const main = async () => {
    const nama = await pertanyaan1();
    const noHP = await pertanyaan2();
    const email = await pertanyaan3();

    const contact = {nama, noHP, email};
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terimakasih sudah menginput data');
    rl.close();
}

main();
// rl.question('Masukkan nama anda: ', (nama) => {
//     rl.question('Masukkan Nomor Hp anda: ', (noHP) => {
//         const contact = {nama, noHP};
//         const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(fileBuffer);
//
//         contacts.push(contact);
//
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//         console.log('Terimakasih sudah memasukkan data!');
//         rl.close();
//     });
// });

