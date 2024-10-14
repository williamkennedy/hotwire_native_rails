class CreateTodos < ActiveRecord::Migration[8.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.boolean :complete

      t.timestamps
    end
  end
end
