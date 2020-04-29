class CreateMoves < ActiveRecord::Migration[6.0]
  def change
    create_table :moves do |t|
      t.string :name, null: false
      t.integer :type_id, null: false
      t.string :category, null: false
      t.integer :power
      t.integer :accuracy, min: 0, max: 100
      t.integer :pp, null: false, min: 5, max: 40
      t.text :description
      t.integer :probability, min: 0, max: 100
    end

    add_index(:moves, :name, unique: true)
    add_foreign_key :moves, :types
  end
end
