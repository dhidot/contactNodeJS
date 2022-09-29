const contacts = require('./contacs');

const main = async () => {
    const nama = await contacts.questions('Masukkan nama anda : ');
    const noHP = await contacts.questions('Masukkan no HP anda : ');
    const email = await contacts.questions('Masukkan email anda : ');

    contacts.saveContact(nama, email, noHP);
};

main()
