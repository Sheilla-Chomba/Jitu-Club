CREATE OR ALTER PROCEDURE updateUser(
    @user_id VARCHAR(100), 
    @f_name VARCHAR(200),
    @l_name VARCHAR(200),
    @email VARCHAR(50),
    @cohort_no INT,
    @Password VARCHAR(200)
    )
AS
BEGIN
    UPDATE Users SET 
        f_name=@f_name, 
        l_name=@l_name, 
        email=@email, 
        cohort_no=@cohort_no, 
        Password=@Password
    WHERE user_id = @user_id
END