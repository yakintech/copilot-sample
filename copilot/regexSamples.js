//Dışarıdan gelen stringin email olup olmadığını kontrol eden fonksiyon. Eğer dışarıdan alınan değer bir string değilse hata döndürür.
function isEmail(email) {
    if (typeof email !== 'string') {
        throw new Error('Lütfen bir string girin');
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

//Dışarıdan gelen stringin bir URL olup olmadığını kontrol eden fonksiyon. Eğer dışarıdan alınan değer bir string değilse hata döndürür.
function isURL(url) {
    if (typeof url !== 'string') {
        throw new Error('Lütfen bir string girin');
    }
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
}

//Dışarıdan gelen stringin bir telefon numarası olup olmadığını kontrol eden fonksiyon. Eğer dışarıdan alınan değer bir string değilse hata döndürür.
function isPhoneNumber(phone) {
    if (typeof phone !== 'string') {
        throw new Error('Lütfen bir string girin');
    }
    const phoneRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
    return phoneRegex.test(phone);
}

//Dışarıdan gelen stringin bir TC kimlik numarası olup olmadığını kontrol eden fonksiyon. Eğer dışarıdan alınan değer bir string değilse hata döndürür.
function isTCKN(tckn) {
    if (typeof tckn !== 'string') {
        throw new Error('Lütfen bir string girin');
    }
    const tcknRegex = /^[1-9]{1}[0-9]{10}$/;
    return tcknRegex.test(tckn);
}

//Dışarıdan gelen stringin bir IBAN numarası olup olmadığını kontrol eden fonksiyon. Eğer dışarıdan alınan değer bir string değilse hata döndürür.
function isIBAN(iban) {
    if (typeof iban !== 'string') {
        throw new Error('Lütfen bir string girin');
    }
    const ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/;
    return ibanRegex.test(iban);
}

//Dışarıdan gelen stringin bir BTC adresi olup olmadığını kontrol eden fonksiyon. Eğer dışarıdan alınan değer bir string değilse hata döndürür.
function isBTCAddress(btc) {
    if (typeof btc !== 'string') {
        throw new Error('Lütfen bir string girin');
    }
    const btcRegex = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;
    return btcRegex.test(btc);
}