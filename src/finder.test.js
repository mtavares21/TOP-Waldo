import {coordInterval, finder} from "./finder"
describe("Check if character is on inside the frame", () =>{
  test("Check if coordinterval is correct within image", ()=>{
    expect(coordInterval(30)(30)).toEqual([15,45])
    expect(coordInterval(30)(15)).toEqual([0,30])
  })
   test("Check if coordinterval is correct outside image", ()=>{
    expect(coordInterval(30)(0)).toEqual([0,15])
    expect(coordInterval(30)(10)).toEqual([0,25])
  })
    test("Check if coordinterval is correct for another size", ()=>{
    expect(coordInterval(50)(40)).toEqual([15,65])
    expect(coordInterval(50)(10)).toEqual([0,35])
  })
  test("Is target inside image, same coord", () => {
    expect(finder([23,20], [23,20], [30,50])).toBe(true)
  })
  test("Is target inside image, deviated coord", () => {
    expect(finder([20,10], [23,20], [30,50])).toBe(true)
  })
  test("Is target inside image, out of frame", () => {
    expect(finder([100,100], [23,20], [30,50])).toBe(false)
  })
  test("Is target inside image, in border", () => {
    expect(finder([35, 45], [20,20], [30,50])).toBe(false)
  })

})