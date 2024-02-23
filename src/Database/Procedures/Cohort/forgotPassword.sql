CREATE OR ALTER PROCEDURE resetPassword(@email VARCHAR(50), @password VARCHAR(200))
AS
BEGIN
    UPDATE Users SET Password = @password WHERE email=@email
END