CREATE PROCEDURE sp_createProduct
    @ProductName NVARCHAR(100),
    @Category NVARCHAR(50),
    @Price DECIMAL(10, 2),
    @Stock INT,
    @SupplierID INT
AS
BEGIN
    IF @Stock < 0
    BEGIN
        RAISERROR ('Stock value cannot be less than 0.', 16, 1);
        RETURN;
    END

    IF EXISTS (SELECT 1 FROM Products WHERE ProductName = @ProductName)
    BEGIN
        RAISERROR ('Product with the same name already exists.', 16, 1);
        RETURN;
    END

    BEGIN TRY
        INSERT INTO Products (ProductName, Category, Price, Stock, SupplierID)
        VALUES (@ProductName, @Category, @Price, @Stock, @SupplierID);
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();

        RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);
    END CATCH
END;