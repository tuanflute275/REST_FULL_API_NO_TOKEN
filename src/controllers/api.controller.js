import pool from '../config/connectDB'

let getAllEmployee = async (req, res) => {
    const [rows, field] = await pool.execute('select * from employee')
    return res.status(200).json({
        message: "select success",
        data: rows
    })
}

let getEmployeeId = async (req, res) => {
    const id = req.params.id
    if (!id) {
        return res.status(200).json({
            message: "missing require params",
        })
    }
    const { rows, field } = await pool.execute('select * from employee where id = ?', [id])
    return res.status(200).json({
        message: "select with id success",
        data: rows
    })
}

let createNewEmployee = async (req, res) => {
    const { firstName, lastName, email, dob, gender, education, company, experience, pkg } = req.body
    if (!firstName, !lastName, !email, !dob, !gender, !education, !company, !experience, !pkg) {
        return res.status(200).json({
            message: "missing require params"
        })
    }
    await pool.execute('insert into employee(firstName, lastName, email, dob, gender, education, company, experience, pkg) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [firstName, lastName, email, dob, gender, education, company, experience, pkg])
    return res.status(200).json({
        message: "create employee success",
    })
}

let updateEmployee = async (req, res) => {
    const id = req.params.id
    const { firstName, lastName, email, dob, gender, education, company, experience, pkg } = req.body
    if (!firstName, !lastName, !email, !dob, !gender, !education, !company, !experience, !pkg) {
        return res.status(200).json({
            message: "missing require params"
        })
    }
    await pool.execute('update employee set firstName = ?, lastName = ?, email = ?, dob = ?, gender = ?, education = ?, company = ?, experience = ?, pkg = ? where id = ? ', [firstName, lastName, email, dob, gender, education, company, experience, pkg, id])
    return res.status(200).json({
        message: "update employee success"
    })
}

let deleteEmployee = async (req, res) => {
    const employeeId = req.params.id
    if (!employeeId) {
        return res.status(200).json({
            message: "missing require params"
        })
    }

    await pool.execute('delete from employee where id = ?', [employeeId])
    return res.status(200).json({
        message: "delete employee success"
    })
}

module.exports = {
    getAllEmployee,
    getEmployeeId,
    createNewEmployee,
    updateEmployee,
    deleteEmployee
}