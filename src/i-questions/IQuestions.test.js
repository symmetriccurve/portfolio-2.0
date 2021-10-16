const rewire = require("rewire")
const IQuestions = rewire("./IQuestions")
const getResponse = IQuestions.__get__("getResponse")
// @ponicode
describe("getResponse", () => {
    test("0", async () => {
        await getResponse("https://")
    })

    test("1", async () => {
        await getResponse("https://croplands.org/app/a/confirm?t=")
    })

    test("2", async () => {
        await getResponse("https://api.telegram.org/")
    })

    test("3", async () => {
        await getResponse("http://www.example.com/route/123?foo=bar")
    })

    test("4", async () => {
        await getResponse("Www.GooGle.com")
    })

    test("5", async () => {
        await getResponse(undefined)
    })
})
