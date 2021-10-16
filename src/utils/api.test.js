const rewire = require("rewire")
const api = rewire("./api")
const Api = api.__get__("Api")
// @ponicode
describe("getJobs", () => {
    let inst

    beforeEach(() => {
        inst = new Api()
    })

    test("0", async () => {
        await inst.getJobs("DROP TABLE tmp;")
    })

    test("1", async () => {
        await inst.getJobs("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
    })

    test("2", async () => {
        await inst.getJobs("UPDATE Projects SET pname = %s WHERE pid = %s")
    })

    test("3", async () => {
        await inst.getJobs("UNLOCK TABLES;")
    })

    test("4", async () => {
        await inst.getJobs("DELETE FROM Projects WHERE pid = %s")
    })

    test("5", async () => {
        await inst.getJobs(undefined)
    })
})
