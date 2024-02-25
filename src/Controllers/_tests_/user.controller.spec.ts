import bcrypt from 'bcrypt'
import mssql from 'mssql'
import { createUser,getOneUser } from '../user.controller'
import Connection from '../../DbHelper/dbhelper';
jest.mock("../../DbHelper/dbhelper");

describe("User Registration", ()=>{

    let res: any

    beforeEach(()=>{
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    it('successfully registers a user', async()=>{
        const req ={
            body:{
                f_name: "Sheilla",
                l_name: "Chomba",
                cohort_no: "18",
                password: "12345678"
            }
        }

        jest.spyOn(bcrypt, 'hash').mockResolvedValueOnce("HashedPwdkjshghgksjgkj" as never)

        const mockedInput = jest.fn().mockReturnThis() //makes it chainable

        const mockedExecute = jest.fn().mockResolvedValue({rowsAffected: [1]})

        const mockedRequest = {
            input: mockedInput,
            execute: mockedExecute
        }

        const mockedPool = {
            request: jest.fn().mockReturnValue(mockedRequest)
        }

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never)

        await createUser(req as any, res)

        expect(res.json).toHaveBeenCalledWith({message: "Account created successfully"})
        expect(res.status).toHaveBeenCalledWith(200)

    })


})

describe("Get users details", ()=>{

    let res: any
    let users:any

    beforeEach(() => {
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      users = {
        recordset: [
          {
            user_id: "770d7679-7457-4207-8a47-887cf4dc88e3",
            f_name: "Jane",
            l_name: "Ngene",
            email: "Jane.Ngene@thejitu.com",
            cohort_no: 22,
            Password:"$2b$05$rc/H5IfcNfQWX8sv9EjL4ee25G2dsH5q/Uoo.s7/PsV.OYZEUZbtu",
            isDeleted: false,
          },
        ]
      }
    });

    it("gets a user details", async()=>{
  
        const req = {
            params:{
                user_id: '770d7679-7457-4207-8a47-887cf4dc88e3'
            }
        };

        (Connection.query as jest.Mock).mockResolvedValueOnce({
            recordset: users.recordset
        })

        await getOneUser(req as any, res)

        expect(res.json).toHaveBeenCalledWith({
            users: users.recordset
        }) 
    })


})