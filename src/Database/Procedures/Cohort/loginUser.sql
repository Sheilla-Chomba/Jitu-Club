CREATE OR ALTER PROCEDURE loginUser(@email VARCHAR(50), @password VARCHAR(200))
AS
BEGIN
    SELECT * FROM Cohort WHERE email = @email AND Password=@password
END