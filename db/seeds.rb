# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'creating users'

u1 = User.create(email:"example@email.com", password:'BadPassword1!', first_name:"First", last_name: "Last")
u2 = User.create(email:"heartponies@email.com", password:'Password1!', first_name:"Heart", last_name: "Pony")

puts 'seeded'