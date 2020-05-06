class Move < ::ApplicationRecord
  belongs_to :type

  default_scope { order(:name) }

  def details
    attributes.merge(
      type: type
    )
  end
end
