//Dışarıdan bir fiyat alan ve bu fiyatın kdvli değerini hesaplayan fonksiyon. Dışarıdan aldıı değer 0 dan küçük olamaz. KDV oranı %18 olarak alınır. Dışarıdan alınan değer numeric bir değer değilse hata döndürür.
function calculateVat(price) {
    if (typeof price !== 'number') {
        throw new Error('Lütfen geçerli bir fiyat girin');
    }

    if (price < 0) {
        throw new Error('Fiyat sıfırdan küçük olamaz');
    }

    return price + (price * 0.18);
}

//Dışarıdan bir metin alan "çağatay yıldız" ve aldığı metnin baş harflerini büyük yaparak geri döndüren fonksiyon. Eğer dışarıdan alınan değer bir string değilse hata döndürür.
function capitalizeFirstLetter(text) {
    if (typeof text !== 'string') {
        throw new Error('Lütfen geçerli bir metin girin');
    }
    return text.replace(/\b\w/g, char => char.toUpperCase());
}


//Dışarıdan bir number array alan ve en büyük sayıyı döndüren fonksiyon. Eğer dışarıdan alınan değer bir array değilse hata döndürür.
function findMaxNumber(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error('Lütfen bir array girin');
    }
    return Math.max(...numbers);
}


