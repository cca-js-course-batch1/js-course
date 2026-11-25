const formatWeather = require("../challenges/e3");

test("formats weather data correctly", () => {
  const raw = {
    name: "Mumbai",
    main: { temp: 308, humidity: 70 },
    weather: [{ description: "clear sky" }]
  };
  const result = formatWeather(raw);
  expect(result.city).toBe("Mumbai");
  expect(result.temp).toBe(308);
  expect(result.humidity).toBe(70);
  expect(result.description).toBe("clear sky");
});
