class Move < ::ApplicationRecord
  belongs_to :type

  def details
    attributes.merge(
      type: type
    )
  end
end
