const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'Nomor HP',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.saveContact(argv.nama, argv.email, argv.noHP);
    }
}).demandCommand();

//Menampilkan semua nama dan nomor HP
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan nomor HP',
    handler() {
        contacts.listContacts();
    }
});

//Menampilkan detail kontak berdasarkan nama
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

//Menghapus kontak berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
});
yargs.parse();