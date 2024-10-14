
## Kurulum

### Gereksinimler

- Node.js
- MongoDB

### Adımlar

1. Bu projeyi klonlayın:

    ```sh
    git clone https://github.com/kullaniciadi/copilot-tutorial.git
    cd copilot-tutorial
    ```

2. Gerekli paketleri yükleyin:

    ```sh
    npm install
    ```

3. `.env` dosyasını oluşturun ve MongoDB bağlantı bilgilerinizi ekleyin:

    ```dotenv
    MONGODB_URI=mongodb+srv://kullaniciadi:sifre@cluster0.mongodb.net/copilot-db
    PORT=3000
    ```

4. Veritabanını tohumlayın (seed):

    ```sh
    node seed.js
    ```

5. Sunucuyu başlatın:

    ```sh
    npm start
    ```

## Kullanım

### Kategoriler

- **Tüm Kategorileri Getir**: `GET /api/categories`
- **Kategori Oluştur**: `POST /api/categories`
- **Kategori Getir**: `GET /api/categories/:id`
- **Kategori Güncelle**: `PUT /api/categories/:id`
- **Kategori Sil**: `DELETE /api/categories/:id`

### Ürünler

- **Tüm Ürünleri Getir**: `GET /api/products`
- **Ürün Oluştur**: `POST /api/products` (Resim yükleme destekli)
- **Ürün Getir**: `GET /api/products/:id`
- **Ürün Güncelle**: `PUT /api/products/:id` (Resim yükleme destekli)
- **Ürün Sil**: `DELETE /api/products/:id`

## Middleware

- **Helmet**: Güvenlik için kullanılır.
- **express-rate-limit**: Rate limiting için kullanılır.
- **Multer**: Dosya yükleme için kullanılır.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.