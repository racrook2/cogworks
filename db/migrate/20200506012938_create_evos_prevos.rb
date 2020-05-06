class CreateEvosPrevos < ActiveRecord::Migration[6.0]
  def change
    create_table :evos_prevos do |t|
      t.integer :prevo_id, null: false
      t.integer :evo_id, null: false
      t.integer :level, min: 1, max: 100
      t.string :method
    end

    add_index(:evos_prevos, [:prevo_id, :evo_id], unique: true)
    add_foreign_key(:evos_prevos, :pokemon, column: :prevo_id)
    add_foreign_key(:evos_prevos, :pokemon, column: :evo_id)
  end
end
