class CreateAttackingsDefendings < ActiveRecord::Migration[6.0]
  def change
    create_table :attackings_defendings do |t|
      t.integer :attacking_id, null: false
      t.integer :defending_id, null: false
      t.float :multiplier, min: 0, max: 2
    end

    add_index(:attackings_defendings, [:attacking_id, :defending_id], unique: true)
    add_foreign_key(:attackings_defendings, :types, column: :attacking_id)
    add_foreign_key(:attackings_defendings, :types, column: :defending_id)
  end
end
