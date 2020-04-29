# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_23_065727) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abilities", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.index ["name"], name: "index_abilities_on_name", unique: true
  end

  create_table "abilities_pokemon", force: :cascade do |t|
    t.integer "ability_id", null: false
    t.integer "pokemon_id", null: false
    t.integer "sort", null: false
    t.index ["ability_id", "pokemon_id"], name: "index_abilities_pokemon_on_ability_id_and_pokemon_id", unique: true
  end

  create_table "moves", force: :cascade do |t|
    t.string "name", null: false
    t.integer "type_id", null: false
    t.string "category", null: false
    t.integer "power"
    t.integer "accuracy"
    t.integer "pp", null: false
    t.text "description"
    t.integer "probability"
    t.index ["name"], name: "index_moves_on_name", unique: true
  end

  create_table "pokemon", force: :cascade do |t|
    t.string "name", null: false
    t.string "subname"
    t.integer "number", null: false
    t.integer "hp", null: false
    t.integer "atk", null: false
    t.integer "def", null: false
    t.integer "spa", null: false
    t.integer "spd", null: false
    t.integer "spe", null: false
    t.index ["name", "subname"], name: "index_pokemon_on_name_and_subname", unique: true
  end

  create_table "pokemon_types", force: :cascade do |t|
    t.integer "pokemon_id", null: false
    t.integer "type_id", null: false
    t.integer "sort", null: false
    t.index ["pokemon_id", "type_id"], name: "index_pokemon_types_on_pokemon_id_and_type_id", unique: true
  end

  create_table "types", force: :cascade do |t|
    t.string "name", null: false
    t.index ["name"], name: "index_types_on_name", unique: true
  end

  add_foreign_key "abilities_pokemon", "abilities"
  add_foreign_key "abilities_pokemon", "pokemon"
  add_foreign_key "moves", "types"
  add_foreign_key "pokemon_types", "pokemon"
  add_foreign_key "pokemon_types", "types"
end
