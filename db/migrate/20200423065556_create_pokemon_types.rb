class CreatePokemonTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemon_types do |t|
      t.integer :pokemon_id, null: false
      t.integer :type_id, null: false
      t.integer :sort, null: false, min: 0, max: 1
    end

    add_index(:pokemon_types, [:pokemon_id, :type_id], unique: true)
    add_foreign_key(:pokemon_types, :pokemon)
    add_foreign_key(:pokemon_types, :types)
  end
end
