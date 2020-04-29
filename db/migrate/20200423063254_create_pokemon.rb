class CreatePokemon < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemon do |t|
      t.string :name, null: false
      t.string :subname
      t.integer :number, null: false
      t.integer :hp, null: false, min: 1, max: 255
      t.integer :atk, null: false, min: 1, max: 255
      t.integer :def, null: false, min: 1, max: 255
      t.integer :spa, null: false, min: 1, max: 255
      t.integer :spd, null: false, min: 1, max: 255
      t.integer :spe, null: false, min: 1, max: 255
    end

    add_index(:pokemon, [:name, :subname], unique: true)
  end
end
