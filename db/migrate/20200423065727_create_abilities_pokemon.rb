class CreateAbilitiesPokemon < ActiveRecord::Migration[6.0]
  def change
    create_table :abilities_pokemon do |t|
      t.integer :ability_id, null: false
      t.integer :pokemon_id, null: false
      t.integer :sort, null: false, min: 0, max: 2
    end

    add_index(:abilities_pokemon, [:ability_id, :pokemon_id], unique: true)
    add_foreign_key(:abilities_pokemon, :abilities)
    add_foreign_key(:abilities_pokemon, :pokemon)
  end
end
