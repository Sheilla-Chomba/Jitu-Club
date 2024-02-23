CREATE OR ALTER PROCEDURE registerUser(
    @user_id VARCHAR(100), 
    @f_name VARCHAR(200),
    @l_name VARCHAR(200),
    @email VARCHAR(50),
    @cohort_no INT,
    @Password VARCHAR(200)
    )
AS
BEGIN 
    INSERT INTO Cohort(user_id, f_name,l_name, email, cohort_no, Password)
    VALUES(@user_id, @f_name,@l_name, @email, @cohort_no, @Password)
END
