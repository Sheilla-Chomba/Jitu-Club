CREATE OR ALTER PROCEDURE getOneUser(@user_id VARCHAR(100))
AS
BEGIN   
    SELECT * FROM Cohort WHERE user_id = @user_id
END