chickadee = Bird.create(name: "Black-Capped Chickadee", species: "Poecile Atricapillus", image_url: "https://curriculum-content.s3.amazonaws.com/uci/chickadee.jpg")
grackle = Bird.create(name: "Grackle", species: "Quiscalus Quiscula", image_url: "https://curriculum-content.s3.amazonaws.com/uci/grackle.jpg")
starling = Bird.create(name: "Common Starling", species: "Sturnus Vulgaris", image_url: "https://curriculum-content.s3.amazonaws.com/uci/starling.jpg")
dove = Bird.create(name: "Mourning Dove", species: "Zenaida Macroura", image_url: "https://curriculum-content.s3.amazonaws.com/uci/dove.jpg")

location_a = Location.create(latitude: "40.730610", longitude: "-73.935242")
location_b = Location.create(latitude: "30.26715", longitude: "-97.74306")
location_c = Location.create(latitude: "45.512794", longitude: "-122.679565")

sighting_a = Sighting.create(bird: chickadee, location: location_a)
sighting_b = Sighting.create(bird: grackle, location: location_b)
sighting_c = Sighting.create(bird: starling, location: location_a)
sighting_d = Sighting.create(bird: dove, location: location_c)
sighting_e = Sighting.create(bird: chickadee, location: location_b)